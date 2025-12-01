"""
Flask Backend Server for Flashcard Spaced Repetition System
"""

from flask import Flask, request, jsonify, session, send_from_directory
from flask_cors import CORS
import sqlite3
import hashlib
import secrets
from datetime import datetime, timedelta
import json
import os
from spaced_repetition import SpacedRepetition

app = Flask(__name__, static_folder='.')
app.secret_key = os.environ.get('SECRET_KEY', secrets.token_hex(32))

# Get production URL from environment or use default
PRODUCTION_URL = os.environ.get('RENDER_EXTERNAL_URL', '')

# Configure CORS
allowed_origins = [
    'http://localhost:8000',
    'http://127.0.0.1:8000',
]

# Add production URL if available
if PRODUCTION_URL:
    allowed_origins.append(PRODUCTION_URL)
    allowed_origins.append(PRODUCTION_URL.replace('https://', 'http://'))

CORS(app,
     origins=allowed_origins,
     supports_credentials=True,
     allow_headers=['Content-Type'],
     methods=['GET', 'POST', 'OPTIONS']
)

# Database setup
DB_PATH = 'database/flashcards.db'
SR = SpacedRepetition()

def init_db():
    """Initialize database with schema"""
    os.makedirs('database', exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    with open('database/schema.sql', 'r') as f:
        conn.executescript(f.read())
    conn.commit()
    conn.close()

def get_db():
    """Get database connection"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def hash_password(password):
    """Hash password with SHA-256"""
    return hashlib.sha256(password.encode()).hexdigest()

# ============================================================================
# Authentication Endpoints
# ============================================================================

@app.route('/api/auth/register', methods=['POST'])
def register():
    """Register a new user"""
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400
    
    if len(password) < 6:
        return jsonify({'error': 'Password must be at least 6 characters'}), 400
    
    conn = get_db()
    try:
        password_hash = hash_password(password)
        conn.execute(
            'INSERT INTO users (username, password_hash) VALUES (?, ?)',
            (username, password_hash)
        )
        conn.commit()
        
        user = conn.execute(
            'SELECT id, username, created_at FROM users WHERE username = ?',
            (username,)
        ).fetchone()
        
        session['user_id'] = user['id']
        session['username'] = user['username']
        
        return jsonify({
            'success': True,
            'user': {
                'id': user['id'],
                'username': user['username'],
                'created_at': user['created_at']
            }
        })
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Username already exists'}), 409
    finally:
        conn.close()

@app.route('/api/auth/login', methods=['POST'])
def login():
    """Login user"""
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400
    
    conn = get_db()
    password_hash = hash_password(password)
    
    user = conn.execute(
        'SELECT id, username, created_at FROM users WHERE username = ? AND password_hash = ?',
        (username, password_hash)
    ).fetchone()
    conn.close()
    
    if user:
        session['user_id'] = user['id']
        session['username'] = user['username']
        
        return jsonify({
            'success': True,
            'user': {
                'id': user['id'],
                'username': user['username'],
                'created_at': user['created_at']
            }
        })
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    """Logout user"""
    session.clear()
    return jsonify({'success': True})

@app.route('/api/auth/me', methods=['GET'])
def get_current_user():
    """Get current logged-in user"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    return jsonify({
        'user': {
            'id': session['user_id'],
            'username': session['username']
        }
    })

# ============================================================================
# Card Review Endpoints
# ============================================================================

@app.route('/api/cards/due', methods=['GET'])
def get_due_cards():
    """Get cards due for review"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    limit = request.args.get('limit', 20, type=int)
    
    conn = get_db()
    
    # Get cards due for review
    due_cards = conn.execute('''
        SELECT card_id, ease_factor, interval, next_review, reviews_count
        FROM card_progress
        WHERE user_id = ? AND next_review <= datetime('now')
        ORDER BY next_review ASC
        LIMIT ?
    ''', (user_id, limit)).fetchall()
    
    conn.close()
    
    return jsonify({
        'cards': [dict(row) for row in due_cards],
        'count': len(due_cards)
    })

@app.route('/api/cards/reviewed-today-hard-again', methods=['GET'])
def get_reviewed_today_hard_again():
    """Get cards reviewed today with rating 0 (Again) or 1 (Hard)"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    chapter_id = request.args.get('chapter_id')
    
    conn = get_db()
    
    query = '''
        SELECT DISTINCT card_id
        FROM review_log
        WHERE user_id = ? 
        AND DATE(reviewed_at) = DATE('now')
        AND rating IN (0, 1)
    '''
    params = [user_id]
    
    # Note: We can't filter by chapter_id in SQL easily because chapter info isn't in DB
    # We'll return all IDs and let frontend filter if needed, 
    # OR frontend sends list of card IDs in chapter to filter against.
    # For now, let's return all and let frontend filter since it has the chapter mapping.
    
    cards = conn.execute(query, params).fetchall()
    conn.close()
    
    return jsonify({
        'card_ids': [row['card_id'] for row in cards],
        'count': len(cards)
    })

@app.route('/api/cards/rate', methods=['POST'])
def rate_card():
    """Submit card rating and update schedule"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    data = request.json
    
    card_id = data.get('card_id')
    rating = data.get('rating')
    
    if card_id is None or rating is None:
        return jsonify({'error': 'card_id and rating required'}), 400
    
    if rating not in [0, 1, 2, 3]:
        return jsonify({'error': 'rating must be 0-3'}), 400
    
    conn = get_db()
    
    # Get current progress or create new
    progress = conn.execute('''
        SELECT ease_factor, interval, reviews_count
        FROM card_progress
        WHERE user_id = ? AND card_id = ?
    ''', (user_id, card_id)).fetchone()
    
    if progress:
        ease_factor = progress['ease_factor']
        interval = progress['interval']
        reviews_count = progress['reviews_count']
    else:
        ease_factor = 2.5
        interval = 0
        reviews_count = 0
    
    # Calculate next review
    new_ease, new_interval, next_review = SR.calculate_next_review(
        rating, ease_factor, interval, reviews_count
    )
    
    # Update or insert progress
    conn.execute('''
        INSERT INTO card_progress (user_id, card_id, ease_factor, interval, next_review, reviews_count, last_reviewed)
        VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
        ON CONFLICT(user_id, card_id) DO UPDATE SET
            ease_factor = excluded.ease_factor,
            interval = excluded.interval,
            next_review = excluded.next_review,
            reviews_count = reviews_count + 1,
            last_reviewed = excluded.last_reviewed
    ''', (user_id, card_id, new_ease, new_interval, next_review, reviews_count + 1))
    
    # Log the review
    conn.execute('''
        INSERT INTO review_log (user_id, card_id, rating, ease_factor, interval)
        VALUES (?, ?, ?, ?, ?)
    ''', (user_id, card_id, rating, new_ease, new_interval))
    
    conn.commit()
    conn.close()
    
    return jsonify({
        'success': True,
        'next_review': next_review.isoformat(),
        'interval_days': new_interval,
        'ease_factor': new_ease
    })

# ============================================================================
# Chapter Progress
# ============================================================================

@app.route('/api/chapters/progress', methods=['GET'])
def get_chapter_progress():
    """Get progress for all chapters"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    conn = get_db()
    
    # Load all flashcards from the frontend data
    # In a real app, this would be in the database
    # For now, we'll calculate progress from review_log
    
    # Get all unique chapter IDs from card IDs in review_log
    query = '''
        SELECT DISTINCT card_id
        FROM review_log
        WHERE user_id = ?
    '''
    reviewed_cards = conn.execute(query, (user_id,)).fetchall()
    
    # Group cards by chapter (extract from card_id format: "chapterId_type_title")
    chapters = {}
    for row in reviewed_cards:
        card_id = row['card_id']
        # Extract chapter number from ID (format: "3_Definition_Linear_Independence")
        try:
            chapter_num = int(card_id.split('_')[0])
        except:
            continue
            
        if chapter_num not in chapters:
            chapters[chapter_num] = []
        chapters[chapter_num].append(card_id)
    
    # For each chapter, calculate statistics
    result_chapters = []
    for chapter_num in sorted(chapters.keys()):
        card_ids = chapters[chapter_num]
        
        chapter_stats = {
            'chapterNumber': chapter_num,
            'chapterName': f'Chapter {chapter_num}',  # This should come from the frontend data
            'totalCards': len(card_ids),
            'masteredCards': 0,
            'learningCards': 0,
            'strugglingCards': 0,
            'newCards': 0,
            'averageEase': 0,
            'cards': []
        }
        
        total_ease = 0
        for card_id in card_ids:
            # Get latest review for this card
            card_query = '''
                SELECT ease_factor, repetitions, last_reviewed, next_review
                FROM cards
                WHERE user_id = ? AND card_id = ?
            '''
            card_data = conn.execute(card_query, (user_id, card_id)).fetchone()
            
            if not card_data:
                chapter_stats['newCards'] += 1
                continue
            
            ease = card_data['ease_factor']
            reps = card_data['repetitions']
            total_ease += ease
            
            # Classify card status
            if ease < 2.0:
                status = 'struggling'
                chapter_stats['strugglingCards'] += 1
            elif ease >= 2.5 and reps >= 3:
                status = 'mastered'
                chapter_stats['masteredCards'] += 1
            else:
                status = 'learning'
                chapter_stats['learningCards'] += 1
            
            # Only include unmastered cards in response
            if status != 'mastered':
                # Get attempt count
                attempts_query = '''
                    SELECT COUNT(*) as count
                    FROM review_log
                    WHERE user_id = ? AND card_id = ?
                '''
                attempts = conn.execute(attempts_query, (user_id, card_id)).fetchone()['count']
                
                chapter_stats['cards'].append({
                    'id': card_id,
                    'front': f'Card {card_id}',  # This should come from frontend data
                    'type': card_id.split('_')[1] if len(card_id.split('_')) > 1 else 'Unknown',
                    'status': status,
                    'ease': ease,
                    'attempts': attempts,
                    'lastReviewed': card_data['last_reviewed'],
                    'nextReview': card_data['next_review']
                })
        
        if len(card_ids) > 0:
            chapter_stats['averageEase'] = total_ease / len(card_ids)
        
        result_chapters.append(chapter_stats)
    
    conn.close()
    
    return jsonify({
        'chapters': result_chapters
    })

@app.route('/api/chapters/<int:chapter_number>/review', methods=['POST'])
def start_chapter_review(chapter_number):
    """Start a review session for a specific chapter"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    data = request.json
    status = data.get('status', 'all')
    card_ids = data.get('card_ids', [])
    
    # In a real implementation, you would create a session and return it
    # For now, we just acknowledge the request
    
    return jsonify({
        'sessionId': secrets.token_hex(16),
        'cards': card_ids,
        'status': 'success'
    })

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get user statistics"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    conn = get_db()
    
    # Cards due today
    due_today = conn.execute('''
        SELECT COUNT(*) as count
        FROM card_progress
        WHERE user_id = ? AND next_review <= datetime('now')
    ''', (user_id,)).fetchone()['count']
    
    # Total reviews
    total_reviews = conn.execute('''
        SELECT COUNT(*) as count
        FROM review_log
        WHERE user_id = ?
    ''', (user_id,)).fetchone()['count']
    
    # Reviews today
    reviews_today = conn.execute('''
        SELECT COUNT(*) as count
        FROM review_log
        WHERE user_id = ? AND DATE(reviewed_at) = DATE('now')
    ''', (user_id,)).fetchone()['count']
    
    conn.close()
    
    return jsonify({
        'due_today': due_today,
        'total_reviews': total_reviews,
        'reviews_today': reviews_today
    })

@app.route('/api/stats/detailed', methods=['GET'])
def get_detailed_stats():
    """Get detailed user statistics with optional filtering"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    # We don't use chapter_id here because chapter info is in frontend
    # Frontend will have to filter "Hard/Again" counts itself if it wants chapter specific
    # BUT user asked for "in the given chapter".
    # Since DB doesn't know chapters, we can't filter here efficiently without joining 
    # or passing all chapter card IDs.
    # BETTER APPROACH: Return global stats, and frontend calculates chapter stats? 
    # No, frontend doesn't have review logs.
    #
    # Let's stick to the plan: Update /api/stats to return the specific count globally first.
    # If filtering by chapter is strictly required for the STAT number, we need a way.
    # The user said: "show the total number of cards that I reviewed and marked either "again or hard". in the given chapter"
    #
    # Solution: Frontend sends list of card_ids belonging to the chapter.
    
    conn = get_db()
    
    # Reviews today (Again/Hard)
    query = '''
        SELECT COUNT(DISTINCT card_id) as count
        FROM review_log
        WHERE user_id = ? 
        AND DATE(reviewed_at) = DATE('now')
        AND rating IN (0, 1)
    '''
    params = [user_id]
    
    # If card_ids provided (for chapter filtering)
    card_ids_str = request.args.get('card_ids')
    if card_ids_str:
        card_ids = card_ids_str.split(',')
        query += f" AND card_id IN ({','.join(['?']*len(card_ids))})"
        params.extend(card_ids)
        
    reviewed_hard_again = conn.execute(query, params).fetchone()['count']
    
    # Total reviews (global)
    total_reviews = conn.execute('SELECT COUNT(*) as count FROM review_log WHERE user_id = ?', (user_id,)).fetchone()['count']
    
    # Reviews today (global)
    reviews_today = conn.execute("SELECT COUNT(*) as count FROM review_log WHERE user_id = ? AND DATE(reviewed_at) = DATE('now')", (user_id,)).fetchone()['count']
    
    conn.close()
    
    return jsonify({
        'reviewed_today_hard_again': reviewed_hard_again,
        'total_reviews': total_reviews,
        'reviews_today': reviews_today
    })

# ============================================================================
# Bookmark Endpoints
# ============================================================================

@app.route('/api/bookmarks', methods=['GET'])
def get_bookmarks():
    """Get all bookmarked card IDs for the current user"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    conn = get_db()
    
    bookmarks = conn.execute(
        'SELECT card_id FROM bookmarks WHERE user_id = ?',
        (user_id,)
    ).fetchall()
    
    return jsonify({
        'bookmarks': [b['card_id'] for b in bookmarks]
    })

@app.route('/api/bookmarks/<card_id>', methods=['POST'])
def toggle_bookmark(card_id):
    """Toggle bookmark status for a card"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    conn = get_db()
    
    # Check if already bookmarked
    existing = conn.execute(
        'SELECT id FROM bookmarks WHERE user_id = ? AND card_id = ?',
        (user_id, card_id)
    ).fetchone()
    
    if existing:
        # Remove bookmark
        conn.execute(
            'DELETE FROM bookmarks WHERE id = ?',
            (existing['id'],)
        )
        is_bookmarked = False
    else:
        # Add bookmark
        conn.execute(
            'INSERT INTO bookmarks (user_id, card_id) VALUES (?, ?)',
            (user_id, card_id)
        )
        is_bookmarked = True
        
    conn.commit()
    conn.close()
    
    return jsonify({
        'success': True,
        'is_bookmarked': is_bookmarked,
        'card_id': card_id
    })

# ============================================================================
# Hidden Cards Endpoints
# ============================================================================

@app.route('/api/hidden', methods=['GET'])
def get_hidden_cards():
    """Get all hidden card IDs for the current user"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    conn = get_db()
    
    hidden = conn.execute(
        'SELECT card_id FROM hidden_cards WHERE user_id = ?',
        (user_id,)
    ).fetchall()
    
    return jsonify({
        'hidden': [h['card_id'] for h in hidden]
    })

@app.route('/api/hidden/<card_id>', methods=['POST'])
def toggle_hidden(card_id):
    """Toggle hidden status for a card"""
    if 'user_id' not in session:
        return jsonify({'error': 'Not authenticated'}), 401
    
    user_id = session['user_id']
    conn = get_db()
    
    # Check if already hidden
    existing = conn.execute(
        'SELECT id FROM hidden_cards WHERE user_id = ? AND card_id = ?',
        (user_id, card_id)
    ).fetchone()
    
    if existing:
        # Unhide
        conn.execute(
            'DELETE FROM hidden_cards WHERE id = ?',
            (existing['id'],)
        )
        is_hidden = False
    else:
        # Hide
        conn.execute(
            'INSERT INTO hidden_cards (user_id, card_id) VALUES (?, ?)',
            (user_id, card_id)
        )
        is_hidden = True
        
    conn.commit()
    conn.close()
    
    return jsonify({
        'success': True,
        'is_hidden': is_hidden,
        'card_id': card_id
    })

# ============================================================================
# Static File Serving
# ============================================================================

@app.route('/')
def serve_index():
    """Serve the main index.html"""
    return send_from_directory('.', 'index.html')

@app.route('/dashboard.html')
def serve_dashboard():
    """Serve the dashboard page"""
    return send_from_directory('.', 'dashboard.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files (CSS, JS, images, etc.)"""
    try:
        return send_from_directory('.', path)
    except:
        # If file not found, return index.html for client-side routing
        return send_from_directory('.', 'index.html')

# ============================================================================
# Server Initialization
# ============================================================================

if __name__ == '__main__':
    init_db()
    print("✅ Database initialized")
    port = int(os.environ.get('PORT', 5001))
    print(f"🚀 Starting Flask server on port {port}")
    app.run(debug=False, host='0.0.0.0', port=port)
