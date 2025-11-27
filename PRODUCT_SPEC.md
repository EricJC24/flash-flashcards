# Flashcard Learning System - Product Specification

**Version**: 1.0  
**Last Updated**: November 2025  
**Status**: Production (Static Apps) / Beta (Spaced Repetition System)

---

## Executive Summary

A web-based flashcard learning platform with two distinct applications for studying linear algebra concepts. The system includes static flashcard reviewers and an advanced spaced repetition prototype with user authentication.

---

## Applications Overview

### 1. LaTeX-Based Flashcard Application

**Primary File**: `index.html`  
**Data Source**: `Linear_Algebra_Summary.tex` → `data.js`

#### Description
Interactive flashcard application sourced from a comprehensive LaTeX linear algebra document. Content includes definitions, theorems, propositions, and techniques from a structured academic textbook.

#### Content Statistics
- **Total Cards**: 100+ flashcards
- **Content Types**: Definitions, Theorems, Propositions, Techniques
- **Chapters**: 8 chapters covering fundamental to advanced linear algebra topics
- **Special Content**: Includes complex mathematical notation, matrices, and one diagram (Sarrus's Rule)

#### Key Features
- Chapter-based filtering (Chapters 1-8)
- Type filtering (Definitions, Theorems, etc.)
- Card shuffling
- Progress tracking within session
- Full LaTeX rendering via MathJax 3
- Responsive mobile design with touch/swipe support
- Image support for mathematical diagrams

#### Data Pipeline
```
Linear_Algebra_Summary.tex 
    ↓ (parse_tex.py)
data.js 
    ↓ (loaded by index.html)
Interactive Flashcards
```

---

### 2. FCLA Web-Scraped Flashcard Application

**Primary File**: `fcla.html`  
**Data Source**: FCLA Website (linear.pugetsound.edu) → `fcla_data.js`

#### Description
Flashcard application built by scraping Robert Beezer's "A First Course in Linear Algebra" (FCLA) online textbook. Extracts definitions and theorems directly from the official HTML source.

#### Content Statistics
- **Total Cards**: 294 flashcards
  - 101 Definitions
  - 193 Theorems
- **Sections**: 34 sections covering the entire FCLA curriculum
- **LaTeX Macros**: 65+ custom FCLA-specific commands fully supported

#### Key Features
- Section-based filtering with full descriptive titles
- Type filtering (Definitions vs Theorems)
- Comprehensive FCLA LaTeX macro support
- All features from LaTeX app (shuffling, progress, mobile support)

#### Data Pipeline
```
FCLA Website HTML Pages
    ↓ (scrape_fcla.py)
fcla_data.js
    ↓ (loaded by fcla.html)
Interactive Flashcards
```

**LaTeX Macro Coverage**: 65+ custom FCLA macros including vectors, matrices, operators, transformations, and set notation.

---

### 3. Spaced Repetition System (Beta)

**Primary File**: `app.html`  
**Backend**: Flask server (`server.py`)  
**Status**: Partially functional (authentication issues in browser)

#### Core Features (Designed)
- **Multi-user authentication**: Register/login system
- **SM-2 Algorithm**: SuperMemo 2 spaced repetition
- **4-Level Rating System**: Again/Hard/Good/Easy (0-3)
- **Progress Tracking**: Cards due, reviews completed, statistics
- **Session Persistence**: Resume where you left off

#### Technical Architecture
- **Backend**: Flask 3.1.2 + SQLite3
- **Database**: 3 tables (users, card_progress, review_log)
- **API**: REST endpoints for auth and card management
- **Frontend**: Vanilla JavaScript with API client

**Known Issues**: CORS configuration, browser compatibility challenges

---

## Shared Technical Features

### Frontend Stack
- HTML5, Vanilla CSS, Vanilla JavaScript (ES6+)
- MathJax 3 for LaTeX rendering
- No frameworks or dependencies

### UI/UX Features
- Premium dark theme design
- 3D card flip animations
- Mobile responsive (touch/swipe gestures)
- Keyboard navigation (arrows, space, 1-4)
- Progress visualization

### Design
- **Colors**: Dark (#0f0f23) with purple gradients (#6c5ce7)
- **Typography**: Inter from Google Fonts
- **Card Size**: 600px × 400px (responsive)

---

## File Structure

### Applications
- `index.html` - LaTeX flashcards
- `fcla.html` - FCLA flashcards  
- `app.html` - Spaced repetition (with auth)
- `app_simple.html` - Simple flashcards (no auth)

### Data
- `data.js` - 100+ LaTeX-sourced cards
- `fcla_data.js` - 294 FCLA cards

### Python
- `parse_tex.py` - LaTeX parser
- `scrape_fcla.py` - Web scraper
- `server.py` - Flask backend (277 lines)
- `spaced_repetition.py` - SM-2 algorithm

### Database
- `database/schema.sql` - Schema
- `database/flashcards.db` - SQLite DB

---

## Deployment

### Static Apps (index.html, fcla.html)
```bash
# Direct access
open index.html

# Or HTTP server
python3 -m http.server 8000
```

### Spaced Repetition (app.html)
```bash
# Terminal 1: Backend
source venv/bin/activate
python server.py

# Terminal 2: Frontend  
python3 -m http.server 8000

# Browser: http://localhost:8000/app.html
```

---

## Future Enhancements

1. Fix spaced repetition authentication
2. Add progress charts and statistics
3. In-app card editor
4. Import/export functionality
5. Docker deployment
6. PWA support for offline use

---

## Credits

**Content Sources**:
- LaTeX source document
- FCLA by Robert A. Beezer (http://linear.pugetsound.edu/fcla/)

**Technologies**:
- MathJax LaTeX rendering
- Flask Python framework
- SM-2 Algorithm by P.A. Wozniak

---

## Documentation

- `README.md` - User guide
- `walkthrough.md` - Development details
- Inline code comments throughout
