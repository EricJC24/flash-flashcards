# Flashcard Learning System

A spaced repetition flashcard application with user authentication and Anki-like scheduling.

## Quick Start

### One-Command Startup ⚡

```bash
./start.sh
```

This will:
- Start the Flask backend server (port 5001)
- Start the web server (port 8000)
- Open your browser automatically

To stop all servers:
```bash
./stop.sh
```

### Manual Startup (Alternative)

<details>
<summary>Click to expand manual startup instructions</summary>

#### 1. Start the Backend Server

```bash
source venv/bin/activate
python server.py
```

You should see:
```
✅ Database initialized
🚀 Starting Flask server on http://localhost:5001
```

#### 2. Start the Web Server

In a new terminal:
```bash
python3 -m http.server 8000
```

#### 3. Open the Application

Navigate to `http://localhost:8000/index.html` in your browser.

</details>

### 3. Create an Account

1. Click "Register" on the login screen
2. Choose a username and password (min 6 characters)
3. Click "Register"

### 4. Start Learning!

- Cards appear one at a time
- Click to flip and see the answer
- Rate your recall:
  - **1** (Again) - Forgot completely → Review tomorrow
  - **2** (Hard) - Difficult recall → Short interval
  - **3** (Good) - Correct with hesitation → Standard interval
  - **4** (Easy) - Perfect recall → Long interval

## Features

- ✅ **Multi-user accounts** - Each user has independent progress
- ✅ **Spaced repetition** - SM-2 algorithm schedules optimal review times
- ✅ **Progress tracking** - See cards due, reviews completed, and stats
- ✅ **Session persistence** - Pick up where you left off
- ✅ **Mobile-friendly** - Responsive design with touch support
- ✅ **Keyboard shortcuts** - 1-4 for ratings, arrows for navigation

## Files

### Applications
- **`app.html`** - Main authenticated app (with spaced repetition)
- **`index.html`** - Original static flashcards (no login required)
- **`fcla.html`** - FCLA web-scraped flashcards (static)

### Backend
- **`server.py`** - Flask REST API
- **`spaced_repetition.py`** - SM-2 algorithm implementation
- **`database/schema.sql`** - Database schema
- **`database/flashcards.db`** - User data (auto-created)

### Frontend
- **`app_script.js`** - App logic with backend integration
- **`api.js`** - API client
- **`auth.css`** - Authentication & rating button styles
- **`style.css`** - Base flashcard styles

### Data
- **`data.js`** - Original LaTeX-based flashcards
- **`fcla_data.js`** - Web-scraped FCLA flashcards

## Keyboard Shortcuts

- **Arrow Keys** - Navigate between cards
- **Space/Enter** - Flip card
- **1** - Rate "Again"
- **2** - Rate "Hard"
- **3** - Rate "Good"
- **4** - Rate "Easy"

## Troubleshooting

**Server won't start?**
- Make sure you're in the virtual environment: `source venv/bin/activate`
- Check if port 5001 is available: `lsof -i :5001`
- On macOS, port 5000 is used by AirPlay - we use 5001 instead

**Can't connect?**
- Verify servers are running:
  - Backend: http://localhost:5001
  - Web: http://localhost:8000
- Check browser console for errors (F12 → Console)

**Lost data?**
- Database is in `database/flashcards.db`
- Backup this file to preserve your progress

## Development

**Reset database:**
```bash
rm database/flashcards.db
python server.py  # Will recreate from schema.sql
```

**Add new flashcards:**
Edit `data.js` or `fcla_data.js`, then reload the page.

## Credits

- **Spaced Repetition**: Based on SuperMemo SM-2 algorithm
- **LaTeX Rendering**: MathJax 3
- **Backend**: Flask + SQLite
