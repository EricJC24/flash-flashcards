# Component Implementation Guide

This guide provides detailed information for implementing each component in the FlashMind application.

## Table of Contents
1. [FlashcardReview Component](#flashcardreview-component)
2. [AuthScreen Component](#authscreen-component)
3. [Dashboard Component](#dashboard-component)
4. [ReviewSession Component](#reviewsession-component)
5. [Statistics Component](#statistics-component)

---

## FlashcardReview Component

### Purpose
Main flashcard interface with 3D flip animation for studying cards.

### File Location
`/components/FlashcardReview.tsx`

### Props Interface
```typescript
interface FlashcardReviewProps {
  onEndReview?: () => void;  // Optional callback when review ends
}
```

### State Management
```typescript
const [currentCardIndex, setCurrentCardIndex] = useState(0);
const [isFlipped, setIsFlipped] = useState(false);
const [selectedChapter, setSelectedChapter] = useState('Chapter 5...');
const [selectedType, setSelectedType] = useState('Definitions');
```

### Key Features

#### 1. Card Flip Animation
```typescript
// Perspective container
style={{ perspective: '1000px', minHeight: '450px' }}

// Rotating container
style={{
  transformStyle: 'preserve-3d',
  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
}}

// Front face
style={{ backfaceVisibility: 'hidden' }}

// Back face  
style={{ 
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)'
}}
```

#### 2. Keyboard Controls
```typescript
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [isFlipped, currentCardIndex]);
```

#### 3. Progress Calculation
```typescript
const progress = ((currentCardIndex + 1) / mockCards.length) * 100;
```

### Styling Classes

#### Main Container
```css
className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
```

#### Card Front
```css
className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-12"
```

#### Card Back
```css
className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border border-purple-500/50 rounded-2xl shadow-2xl p-12"
```

#### Buttons
```css
// Disabled state
className="bg-slate-800/30 text-slate-600 cursor-not-allowed border border-slate-700/30"

// Active state
className="bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700/50"

// Primary action
className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700"
```

### Integration Example
```typescript
import { FlashcardReview } from './components/FlashcardReview';

function App() {
  return (
    <FlashcardReview 
      onEndReview={() => console.log('Review ended')}
    />
  );
}
```

---

## AuthScreen Component

### Purpose
Login and registration screen with dark theme design.

### File Location
`/components/AuthScreen.tsx`

### Props Interface
```typescript
interface AuthScreenProps {
  onLogin: (username: string) => void;
}
```

### State Management
```typescript
const [isLogin, setIsLogin] = useState(true);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
```

### Key Features

#### 1. Toggle Between Login/Register
```typescript
<div className="flex gap-2 mb-6 bg-slate-900/50 rounded-lg p-1">
  <button
    onClick={() => setIsLogin(true)}
    className={isLogin ? 'bg-purple-600 text-white' : 'text-slate-400'}
  >
    Login
  </button>
  <button
    onClick={() => setIsLogin(false)}
    className={!isLogin ? 'bg-purple-600 text-white' : 'text-slate-400'}
  >
    Register
  </button>
</div>
```

#### 2. Password Visibility Toggle
```typescript
<input
  type={showPassword ? 'text' : 'password'}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? <EyeOff /> : <Eye />}
</button>
```

#### 3. Form Submission
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (username && password) {
    onLogin(username);
  }
};
```

### Styling

#### Logo Container
```css
className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"
```

#### Auth Card
```css
className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
```

#### Input Fields
```css
className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
```

---

## Dashboard Component

### Purpose
Main dashboard showing statistics and review controls.

### File Location
`/components/Dashboard.tsx`

### Props Interface
```typescript
interface DashboardProps {
  onStartReview: () => void;
}
```

### State Management
```typescript
const [selectedChapter, setSelectedChapter] = useState('all');
const [selectedType, setSelectedType] = useState('all');
```

### Key Sections

#### 1. Welcome Section
```typescript
<div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
  <h2>Ready to learn?</h2>
  <p>You have {stats.cardsDueToday} cards due</p>
  <button onClick={onStartReview}>Start Review Session</button>
</div>
```

#### 2. Stats Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Stat cards with icons */}
</div>
```

#### 3. Progress Bar
```typescript
<div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
    style={{ width: `${(reviewedToday / cardsDueToday) * 100}%` }}
  />
</div>
```

### Stat Card Structure
```typescript
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
  <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 bg-blue-500/20 rounded-lg">
      <Calendar className="w-5 h-5 text-blue-400" />
    </div>
    <span className="text-xs text-slate-400">Label</span>
  </div>
  <div className="text-3xl text-white mb-1">{value}</div>
  <div className="text-sm text-slate-400">Description</div>
</div>
```

---

## ReviewSession Component

### Purpose
Full review session with Anki-style spaced repetition rating.

### File Location
`/components/ReviewSession.tsx`

### Props Interface
```typescript
interface ReviewSessionProps {
  onEndReview: () => void;
}
```

### State Management
```typescript
const [currentCardIndex, setCurrentCardIndex] = useState(0);
const [isFlipped, setIsFlipped] = useState(false);
const [reviewCount, setReviewCount] = useState(0);
const [isPaused, setIsPaused] = useState(false);
const [ratings, setRatings] = useState<{ [key: string]: number }>({});
```

### Rating System

#### Rating Buttons
```typescript
const ratings = [
  { value: 1, label: 'Again', time: '<1 min', color: 'red' },
  { value: 2, label: 'Hard', time: '<6 min', color: 'orange' },
  { value: 3, label: 'Good', time: '<10 min', color: 'green' },
  { value: 4, label: 'Easy', time: '4 days', color: 'blue' }
];
```

#### Handle Rating
```typescript
const handleRate = (rating: number) => {
  if (!isFlipped) return;
  
  setRatings({ ...ratings, [currentCard.id]: rating });
  setReviewCount(reviewCount + 1);
  
  if (currentCardIndex < mockCards.length - 1) {
    setCurrentCardIndex(currentCardIndex + 1);
    setIsFlipped(false);
  } else {
    // Session complete
    onEndReview();
  }
};
```

### Keyboard Shortcuts
```typescript
if (e.key === '1') handleRate(1);
else if (e.key === '2') handleRate(2);
else if (e.key === '3') handleRate(3);
else if (e.key === '4') handleRate(4);
```

### Pause Modal
```typescript
{isPaused && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
      <h3>Session Paused</h3>
      <button onClick={handleResume}>Resume</button>
      <button onClick={onEndReview}>End Session</button>
    </div>
  </div>
)}
```

---

## Statistics Component

### Purpose
Detailed statistics and analytics with charts.

### File Location
`/components/Statistics.tsx`

### Mock Data Structure
```typescript
const stats = {
  totalCards: 156,
  totalReviews: 438,
  averageEase: 2.6,
  currentStreak: 7,
  longestStreak: 21,
  reviewsThisWeek: 84,
  reviewsThisMonth: 312,
  masteredCards: 89,
  learningCards: 45,
  newCards: 22,
  accuracy: 78
};

const recentActivity = [
  { date: '2025-11-27', reviews: 24, accuracy: 82 },
  // ... more days
];
```

### Activity Chart
```typescript
const maxReviews = Math.max(...recentActivity.map(a => a.reviews));

<div className="flex-1 h-8 bg-slate-900/50 rounded-lg overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
    style={{ width: `${(day.reviews / maxReviews) * 100}%` }}
  >
    <span>{day.reviews}</span>
  </div>
</div>
```

### Card Distribution
```typescript
<div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
  <div
    className="h-full bg-green-600"
    style={{ width: `${(masteredCards / totalCards) * 100}%` }}
  />
</div>
```

---

## General Design Patterns

### Glassmorphism Effect
```css
bg-slate-800/50          /* Semi-transparent background */
backdrop-blur-xl         /* Blur effect */
border border-slate-700/50  /* Semi-transparent border */
```

### Gradient Buttons
```css
bg-gradient-to-r from-purple-600 to-pink-600
hover:from-purple-700 hover:to-pink-700
shadow-lg hover:shadow-purple-500/50
```

### Icon Containers
```css
w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center
```

### Responsive Grid
```css
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
```

---

## Testing Checklist

- [ ] Card flip animation works smoothly
- [ ] Keyboard shortcuts respond correctly
- [ ] Navigation buttons disable at boundaries
- [ ] Progress bar updates accurately
- [ ] Filters update card selection
- [ ] Rating system records choices
- [ ] Pause/resume maintains state
- [ ] Statistics calculate correctly
- [ ] Responsive on mobile/tablet
- [ ] All hover states work

---

## Performance Tips

1. **Memoization**: Use `useMemo` for expensive calculations
2. **Lazy Loading**: Load statistics data only when needed
3. **Debouncing**: Debounce filter changes
4. **Virtual Scrolling**: For large card lists
5. **Image Optimization**: Lazy load card images if added

---

## Accessibility

- Use semantic HTML
- Add ARIA labels to buttons
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Add focus indicators
- Support screen readers
