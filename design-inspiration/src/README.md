# FlashMind - Flashcard Application

A modern flashcard application with spaced repetition learning, built with React, TypeScript, and Tailwind CSS.

## 🎨 Design System

### Colors
- **Background**: Gradient from slate-900 → purple-900 → slate-900
- **Cards**: slate-800/50 with backdrop-blur (glassmorphism)
- **Borders**: slate-700/50
- **Primary Accent**: Purple-500 to Pink-500 gradient
- **Text**: White for headings, slate-300/400 for secondary text

### Typography
- **Headers**: text-3xl to text-4xl, white color
- **Body**: text-lg to text-xl, slate-200/300
- **Small text**: text-sm, slate-400/500

### Components Style
- **Buttons**: Rounded-lg with gradient backgrounds
- **Cards**: Rounded-2xl with glassmorphism effect
- **Inputs**: Dark bg-slate-900/50 with slate-700 borders
- **Badges**: Rounded-full with colored backgrounds

## 📁 File Structure

```
/
├── App.tsx                           # Main app entry point
├── components/
│   ├── AuthScreen.tsx               # Login/Register screen
│   ├── Dashboard.tsx                # Main dashboard with stats
│   ├── FlashcardReview.tsx          # Flashcard review interface
│   ├── ReviewSession.tsx            # Full review session with rating
│   ├── Statistics.tsx               # Statistics and analytics
│   ├── TemplateSelector.tsx         # (Legacy - from collage maker)
│   ├── ImageUploader.tsx            # (Legacy - from collage maker)
│   ├── CollageCanvas.tsx            # (Legacy - from collage maker)
│   └── TextOverlayPanel.tsx         # (Legacy - from collage maker)
└── README.md                         # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Required packages (if not already installed):
npm install lucide-react
```

### Running the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build
```

## 📦 Components Overview

### 1. AuthScreen
**Path**: `/components/AuthScreen.tsx`

Login and registration screen with dark theme.

**Props**:
```typescript
interface AuthScreenProps {
  onLogin: (username: string) => void;
}
```

**Features**:
- Toggle between login/register
- Password visibility toggle
- Dark glassmorphism design
- Gradient accent buttons

---

### 2. FlashcardReview
**Path**: `/components/FlashcardReview.tsx`

Main flashcard review interface with flip animation.

**Props**:
```typescript
interface FlashcardReviewProps {
  onEndReview?: () => void;
}
```

**Features**:
- 3D card flip animation (front/back)
- Keyboard shortcuts (Space, Arrow keys)
- Progress tracking
- Chapter and type filters
- Navigation controls

**Keyboard Controls**:
- `Space` or `Enter` - Flip card
- `←` - Previous card
- `→` - Next card

---

### 3. ReviewSession
**Path**: `/components/ReviewSession.tsx`

Full review session with Anki-style rating system.

**Props**:
```typescript
interface ReviewSessionProps {
  onEndReview: () => void;
}
```

**Features**:
- 4-level rating system (Again, Hard, Good, Easy)
- Pause/resume functionality
- Card flip animation
- Progress bar
- Keyboard shortcuts (1-4 for rating)

**Rating System**:
- `1` - Again (< 1 min)
- `2` - Hard (< 6 min)
- `3` - Good (< 10 min)
- `4` - Easy (4 days)

---

### 4. Dashboard
**Path**: `/components/Dashboard.tsx`

Main dashboard with statistics and controls.

**Props**:
```typescript
interface DashboardProps {
  onStartReview: () => void;
}
```

**Features**:
- Statistics cards (cards due, reviewed, streak)
- Progress visualization
- Review filters
- Pro tips section

---

### 5. Statistics
**Path**: `/components/Statistics.tsx`

Detailed statistics and analytics page.

**Features**:
- Total cards and reviews
- Activity charts (7-day view)
- Card distribution breakdown
- Achievements system
- Accuracy tracking

---

## 🎯 Usage Example

```typescript
import { useState } from 'react';
import { AuthScreen } from './components/AuthScreen';
import { FlashcardReview } from './components/FlashcardReview';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthScreen onLogin={(username) => setUser({ username })} />;
  }

  return <FlashcardReview />;
}
```

## 🎨 Customization

### Changing Colors

The app uses Tailwind CSS classes. Main colors to customize:

```typescript
// Primary gradient
from-purple-600 to-pink-600

// Background gradient
from-slate-900 via-purple-900 to-slate-900

// Card backgrounds
bg-slate-800/50

// Borders
border-slate-700/50
```

### Adding New Cards

Cards data structure:

```typescript
interface Card {
  id: string;
  front: string;        // Question/prompt (supports HTML/LaTeX)
  back: string;         // Answer (supports HTML/LaTeX)
  chapter: string;      // e.g., "Chapter 5: Orthogonality"
  type: string;         // e.g., "Definitions", "Theorems"
  ease?: number;        // Spaced repetition ease factor
  interval?: number;    // Days until next review
  repetitions?: number; // Number of successful reviews
  nextReview?: Date;    // Next review date
}
```

## 🔧 Technical Details

### 3D Card Flip Animation

The card flip uses CSS 3D transforms:

```css
perspective: 1000px;
transform-style: preserve-3d;
transform: rotateY(180deg);
backface-visibility: hidden;
```

### Glassmorphism Effect

Achieved with:
```css
background: rgba(30, 41, 59, 0.5);  // slate-800/50
backdrop-filter: blur(12px);
border: 1px solid rgba(51, 65, 85, 0.5);  // slate-700/50
```

## 📱 Responsive Design

The application is responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

Tailwind breakpoints used:
- `md:` - 768px+
- `lg:` - 1024px+

## 🎓 Math Support

The app supports LaTeX/MathJax for mathematical notation:

```javascript
// Use $$ for block math, $ for inline
"$$A\\vec{x} = \\vec{b}$$"

// Or use dangerouslySetInnerHTML for HTML content
```

To add MathJax support, include in your HTML:
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

## 🐛 Known Issues

- MathJax rendering requires external library (not included by default)
- Card shuffle is a mock function (needs implementation)
- Authentication is mock (no backend integration)

## 🔐 Backend Integration

To connect to a backend:

1. Replace mock data in components with API calls
2. Implement authentication endpoints
3. Store card progress in database
4. Implement spaced repetition algorithm (SM-2)

Example API structure:
```
POST /api/auth/login
POST /api/auth/register
GET  /api/cards
POST /api/cards/:id/review
GET  /api/stats
```

## 📄 License

This design is ready for use in your project.

## 👨‍💻 Developer Notes

- All components are typed with TypeScript
- Uses React hooks (useState, useEffect)
- Tailwind CSS v4.0 compatible
- Icons from lucide-react
- No external CSS files needed (Tailwind only)

## 🎉 Next Steps

1. Integrate with backend API
2. Add MathJax for math rendering
3. Implement actual spaced repetition algorithm
4. Add user profile management
5. Enable card creation/editing
6. Add export/import functionality
