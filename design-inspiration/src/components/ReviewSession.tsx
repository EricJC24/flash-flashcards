import { useState, useEffect } from 'react';
import { X, Pause, RotateCcw } from 'lucide-react';

interface ReviewSessionProps {
  onEndReview: () => void;
}

// Mock cards data
const mockCards = [
  {
    id: '1',
    front: 'What is the definition of a derivative?',
    back: 'The derivative of a function f(x) at a point x is the instantaneous rate of change, defined as: $$f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$',
    chapter: 'Chapter 1',
    type: 'Definition'
  },
  {
    id: '2',
    front: 'State the Pythagorean Theorem',
    back: 'In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: $$a^2 + b^2 = c^2$$',
    chapter: 'Chapter 2',
    type: 'Theorem'
  },
  {
    id: '3',
    front: 'What is the integral of sin(x)?',
    back: '$$\\int \\sin(x) dx = -\\cos(x) + C$$',
    chapter: 'Chapter 3',
    type: 'Example'
  }
];

export function ReviewSession({ onEndReview }: ReviewSessionProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const currentCard = mockCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / mockCards.length) * 100;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isPaused) return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      } else if (isFlipped) {
        if (e.key === '1') handleRate(1);
        else if (e.key === '2') handleRate(2);
        else if (e.key === '3') handleRate(3);
        else if (e.key === '4') handleRate(4);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, isPaused, currentCardIndex]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRate = (rating: number) => {
    if (!isFlipped) return;

    setRatings({ ...ratings, [currentCard.id]: rating });
    setReviewCount(reviewCount + 1);

    // Move to next card
    if (currentCardIndex < mockCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      // Session complete
      setTimeout(() => {
        alert('Session complete! Great work! 🎉');
        onEndReview();
      }, 500);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const getRatingColor = (rating: number) => {
    switch (rating) {
      case 1: return 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800';
      case 2: return 'from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800';
      case 3: return 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800';
      case 4: return 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800';
      default: return '';
    }
  };

  const getRatingInfo = (rating: number) => {
    switch (rating) {
      case 1: return { label: 'Again', time: '<1 min', key: '1' };
      case 2: return { label: 'Hard', time: '<6 min', key: '2' };
      case 3: return { label: 'Good', time: '<10 min', key: '3' };
      case 4: return { label: 'Easy', time: '4 days', key: '4' };
      default: return { label: '', time: '', key: '' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Pause Modal */}
      {isPaused && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-white text-xl mb-4">Session Paused</h3>
            <p className="text-slate-300 mb-6">
              Your progress has been saved. You can resume anytime.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleResume}
                className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Resume Review
              </button>
              <button
                onClick={onEndReview}
                className="flex-1 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                End Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">
              Card {currentCardIndex + 1} of {mockCards.length}
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              {currentCard.chapter}
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
              {currentCard.type}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePause}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Pause className="w-5 h-5" />
            </button>
            <button
              onClick={onEndReview}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="perspective-1000 mb-6">
        <div
          className={`relative w-full transition-transform duration-500 transform-style-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-12 min-h-[400px] flex flex-col items-center justify-center shadow-2xl ${
              isFlipped ? 'invisible' : 'visible'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-center">
              <div className="text-2xl text-white mb-8 leading-relaxed">
                {currentCard.front}
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <RotateCcw className="w-4 h-4" />
                <span>Click or press Space to reveal answer</span>
              </div>
            </div>
          </div>

          {/* Back */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-purple-800/90 to-pink-800/90 backdrop-blur-sm border-2 border-purple-400/50 rounded-2xl p-12 min-h-[400px] flex flex-col items-center justify-center shadow-2xl ${
              isFlipped ? 'visible' : 'invisible'
            }`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="text-center">
              <div className="text-xl text-white mb-4 leading-relaxed">
                {currentCard.back}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Buttons */}
      {isFlipped && (
        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((rating) => {
            const info = getRatingInfo(rating);
            return (
              <button
                key={rating}
                onClick={() => handleRate(rating)}
                className={`bg-gradient-to-br ${getRatingColor(rating)} text-white rounded-xl p-4 transition-all shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                <div className="text-xs opacity-80 mb-1">Press {info.key}</div>
                <div className="mb-1">{info.label}</div>
                <div className="text-xs opacity-80">{info.time}</div>
              </button>
            );
          })}
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      {!isFlipped && (
        <div className="mt-6 bg-slate-800/30 border border-slate-700/30 rounded-xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <kbd className="px-3 py-1 bg-slate-700 text-slate-300 rounded">Space</kbd>
              <p className="text-slate-400 text-xs mt-2">Flip Card</p>
            </div>
            <div>
              <kbd className="px-3 py-1 bg-red-600/30 text-red-400 rounded">1</kbd>
              <p className="text-slate-400 text-xs mt-2">Again</p>
            </div>
            <div>
              <kbd className="px-3 py-1 bg-orange-600/30 text-orange-400 rounded">2</kbd>
              <p className="text-slate-400 text-xs mt-2">Hard</p>
            </div>
            <div>
              <kbd className="px-3 py-1 bg-green-600/30 text-green-400 rounded">3</kbd>
              <p className="text-slate-400 text-xs mt-2">Good</p>
            </div>
          </div>
        </div>
      )}

      {/* Session Stats */}
      <div className="mt-6 text-center text-slate-400 text-sm">
        Reviews completed: {reviewCount} • Cards remaining: {mockCards.length - currentCardIndex - 1}
      </div>
    </div>
  );
}
