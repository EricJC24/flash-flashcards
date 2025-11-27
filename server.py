"""
Flask Backend Server for Flashcard Spaced Repetition System
"""

from flask import Flask, request, jsonify, session
from flask_cors import CORS
import sqlite3
import hashlib
import secrets
from datetime import datetime, timedelta
import json
import os
from spaced_repetition import SpacedRepetition

app = Flask(__name__)
app.secret_key = secrets.token_hex(32)
CORS(app, 
     origins=['http://localhost:8000', 'http://127.0.0.1:8000'],
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

# ============================================================================
# Server Initialization
# ============================================================================

if __name__ == '__main__':
    init_db()
    print("✅ Database initialized")
    print("🚀 Starting Flask server on http://localhost:5000")
    app.run(debug=True, port=5000)
