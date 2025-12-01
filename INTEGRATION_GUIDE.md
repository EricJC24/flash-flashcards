# ChapterDashboard Integration Guide

Quick guide for integrating the new **ChapterDashboard** component into the FlashMind application.

## 📦 What You Need

### File to Add
- `/components/ChapterDashboard.tsx` (450 lines)

### Dependencies
Already included in the project:
- `lucide-react` (for icons: BookOpen, TrendingDown, AlertCircle, Clock, Play, ChevronDown, ChevronUp)
- React hooks (useState)
- Tailwind CSS

## 🎯 Quick Integration (3 Options)

### Option 1: Standalone Page (Recommended)
Use as a dedicated route in your app:

```typescript
// App.tsx or your routing file
import { ChapterDashboard } from './components/ChapterDashboard';

// Add to your routes
<Route path="/chapters" element={<ChapterDashboard />} />
```

### Option 2: Add to Main Navigation
Integrate into existing app navigation:

```typescript
import { useState } from 'react';
import { AuthScreen } from './components/AuthScreen';
import { Dashboard } from './components/Dashboard';
import { ChapterDashboard } from './components/ChapterDashboard';
import { FlashcardReview } from './components/FlashcardReview';

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('dashboard');

  if (!user) {
    return <AuthScreen onLogin={(username) => setUser({ username })} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4">
            <button onClick={() => setView('dashboard')}>Dashboard</button>
            <button onClick={() => setView('chapters')}>Chapter Progress</button>
            <button onClick={() => setView('stats')}>Statistics</button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {view === 'dashboard' && <Dashboard onStartReview={() => setView('review')} />}
        {view === 'chapters' && <ChapterDashboard />}
        {view === 'stats' && <Statistics />}
        {view === 'review' && <FlashcardReview />}
      </main>
    </div>
  );
}
```

### Option 3: Dashboard Tab
Add as a tab within the existing Dashboard component:

```typescript
// Inside Dashboard.tsx
const [activeTab, setActiveTab] = useState('overview');

// Add tab navigation
<div className="flex gap-2 mb-6">
  <button onClick={() => setActiveTab('overview')}>Overview</button>
  <button onClick={() => setActiveTab('chapters')}>By Chapter</button>
</div>

{activeTab === 'overview' && <OverviewContent />}
{activeTab === 'chapters' && <ChapterDashboard />}
```

## 🔌 Backend Integration

### API Endpoints Needed

#### 1. Get Chapter Progress
```typescript
GET /api/chapters/progress

Response:
{
  chapters: [
    {
      chapterName: "Orthogonality and Least Squares",
      chapterNumber: 5,
      totalCards: 24,
      masteredCards: 12,
      learningCards: 8,
      newCards: 2,
      strugglingCards: 2,
      averageEase: 2.3,
      cards: [...]
    }
  ]
}
```

#### 2. Start Chapter Review
```typescript
POST /api/chapters/{chapterNumber}/review
Body: { status: 'struggling' | 'learning' | 'new' | 'all' }

Response:
{
  sessionId: "...",
  cards: [...]
}
```

### Replace Mock Data

Current code (lines 14-115):
```typescript
// Mock data - replace with real data from your backend
const chaptersData: ChapterProgress[] = [
  // ... mock data
];
```

Replace with:
```typescript
import { useState, useEffect } from 'react';

export function ChapterDashboard() {
  const [chaptersData, setChaptersData] = useState<ChapterProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChapterProgress() {
      try {
        const response = await fetch('/api/chapters/progress');
        const data = await response.json();
        setChaptersData(data.chapters);
      } catch (error) {
        console.error('Failed to fetch chapter progress:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchChapterProgress();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // ... rest of component
}
```

### Connect "Review These" Button

Find this line (around line 329):
```typescript
<button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
  <Play className="w-4 h-4" />
  Review These
</button>
```

Replace with:
```typescript
<button 
  onClick={() => handleStartChapterReview(chapter.chapterNumber, filterStatus)}
  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
>
  <Play className="w-4 h-4" />
  Review These
</button>
```

Add handler function:
```typescript
const handleStartChapterReview = async (chapterNumber: number, status: string) => {
  try {
    const response = await fetch(`/api/chapters/${chapterNumber}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    const data = await response.json();
    
    // Navigate to review session with filtered cards
    onStartReview?.(data.sessionId, data.cards);
  } catch (error) {
    console.error('Failed to start review:', error);
  }
};
```

## 🎨 Customization

### Change Color Scheme

Status colors (lines 128-135):
```typescript
const getStatusColor = (status: string) => {
  switch (status) {
    case 'new': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
    case 'learning': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
    case 'struggling': return 'text-red-400 bg-red-500/20 border-red-500/30';
    case 'mastered': return 'text-green-400 bg-green-500/20 border-green-500/30';
  }
};
```

Ease color thresholds (lines 137-142):
```typescript
const getEaseColor = (ease: number) => {
  if (ease >= 2.5) return 'text-green-400';  // Good
  if (ease >= 2.0) return 'text-yellow-400'; // Okay
  return 'text-red-400';                      // Struggling
}
```

### Add Loading State

```typescript
{loading && (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-white">Loading chapter progress...</div>
  </div>
)}
```

### Add Error Handling

```typescript
const [error, setError] = useState<string | null>(null);

{error && (
  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-4">
    <p className="text-red-400">{error}</p>
  </div>
)}
```

## 📊 Data Requirements

### Card Status Logic

Cards should be classified based on their spaced repetition performance:

```typescript
function getCardStatus(card: Card): 'new' | 'learning' | 'struggling' | 'mastered' {
  if (card.attempts === 0) return 'new';
  
  if (card.ease < 2.0) return 'struggling';
  if (card.ease >= 2.5 && card.repetitions >= 3) return 'mastered';
  
  return 'learning';
}
```

### Backend Calculation Example

```python
# Python backend example
def calculate_chapter_progress(user_id, chapter_number):
    cards = get_chapter_cards(chapter_number)
    
    progress = {
        'totalCards': len(cards),
        'masteredCards': 0,
        'learningCards': 0,
        'strugglingCards': 0,
        'newCards': 0,
        'cards': []
    }
    
    for card in cards:
        user_progress = get_user_card_progress(user_id, card.id)
        
        if user_progress.attempts == 0:
            status = 'new'
            progress['newCards'] += 1
        elif user_progress.ease < 2.0:
            status = 'struggling'
            progress['strugglingCards'] += 1
        elif user_progress.ease >= 2.5 and user_progress.repetitions >= 3:
            status = 'mastered'
            progress['masteredCards'] += 1
        else:
            status = 'learning'
            progress['learningCards'] += 1
        
        # Only include unmastered cards in response
        if status != 'mastered':
            progress['cards'].append({
                'id': card.id,
                'front': card.front,
                'type': card.type,
                'status': status,
                'ease': user_progress.ease,
                'attempts': user_progress.attempts,
                'lastReviewed': user_progress.last_reviewed,
                'nextReview': user_progress.next_review
            })
    
    return progress
```

## ✅ Testing Checklist

- [ ] Component renders without errors
- [ ] Filter buttons change displayed cards
- [ ] Chapters expand/collapse on click
- [ ] Progress bars show correct percentages
- [ ] Status badges display correct colors
- [ ] Ease factors show with proper color coding
- [ ] "Review These" button triggers review
- [ ] Responsive on mobile/tablet
- [ ] Empty state shows when all mastered
- [ ] Summary stats calculate correctly

## 🚀 Deployment Notes

### Performance
- Component renders ~100-500 cards efficiently
- No virtual scrolling needed (collapsed by default)
- Consider lazy loading if >10 chapters

### Accessibility
- All buttons are keyboard accessible
- Color coding has text labels
- ARIA labels recommended for expand/collapse

### Browser Support
- Same as main app (Chrome 90+, Firefox 88+, Safari 14+)
- Uses standard CSS (no special requirements)

## 📞 Support

If your engineer has questions:

1. **Component structure**: See `/COMPONENT_GUIDE.md` lines 200+
2. **Styling patterns**: All use same design system as other components
3. **State management**: Uses local useState (can upgrade to Context if needed)

---

**Estimated integration time:** 1-2 hours (basic) or 3-4 hours (with full backend)

Good luck! 🚀
