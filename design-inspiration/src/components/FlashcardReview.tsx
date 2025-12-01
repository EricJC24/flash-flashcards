import { useState, useEffect } from 'react';
import { Shuffle, ArrowLeft, ArrowRight } from 'lucide-react';

interface FlashcardReviewProps {
  onEndReview?: () => void;
}

// Mock cards data with math content
const mockCards = [
  {
    id: '1',
    front: `Consider a linear system

$$A\\vec{x} = \\vec{b},$$

where $A$ is an $n \\times m$ matrix. A vector $\\vec{x}^*$ in $\\mathbb{R}^m$ is called a **least-squares solution** of this system if

$$\\|\\vec{b} - A\\vec{x}^*\\| \\leq \\|\\vec{b} - A\\vec{x}\\|$$ for all $\\vec{x}$ in $\\mathbb{R}^m$.`,
    back: `**Definition: Least-Squares Solution**

The least-squares solution minimizes the distance between $\\vec{b}$ and $A\\vec{x}$.

**Key Properties:**
- Always exists (even when system is inconsistent)
- Unique when $A$ has linearly independent columns
- Found by solving the normal equation: $A^TA\\vec{x} = A^T\\vec{b}$

**Geometric Interpretation:**
$A\\vec{x}^*$ is the orthogonal projection of $\\vec{b}$ onto the column space of $A$.`,
    chapter: 'Chapter 5: Orthogonality and Least Squares',
    type: 'Definitions'
  },
  {
    id: '2',
    front: `What is the definition of an **orthogonal matrix**?`,
    back: `**Definition: Orthogonal Matrix**

A square matrix $Q$ is called orthogonal if:

$$Q^TQ = QQ^T = I$$

**Equivalent Conditions:**
- The columns of $Q$ form an orthonormal basis
- The rows of $Q$ form an orthonormal basis
- $Q^T = Q^{-1}$
- $Q$ preserves lengths: $\\|Q\\vec{x}\\| = \\|\\vec{x}\\|$`,
    chapter: 'Chapter 5: Orthogonality and Least Squares',
    type: 'Definitions'
  },
  {
    id: '3',
    front: `State the **Gram-Schmidt Process**.`,
    back: `**Gram-Schmidt Process**

Given linearly independent vectors $\\{\\vec{v}_1, \\vec{v}_2, ..., \\vec{v}_n\\}$:

1. $\\vec{u}_1 = \\vec{v}_1$
2. $\\vec{u}_2 = \\vec{v}_2 - \\text{proj}_{\\vec{u}_1}(\\vec{v}_2)$
3. $\\vec{u}_3 = \\vec{v}_3 - \\text{proj}_{\\vec{u}_1}(\\vec{v}_3) - \\text{proj}_{\\vec{u}_2}(\\vec{v}_3)$
4. Continue...

Then normalize: $\\vec{e}_i = \\frac{\\vec{u}_i}{\\|\\vec{u}_i\\|}$

**Result:** Orthonormal basis $\\{\\vec{e}_1, \\vec{e}_2, ..., \\vec{e}_n\\}$`,
    chapter: 'Chapter 5: Orthogonality and Least Squares',
    type: 'Theorems'
  }
];

export function FlashcardReview({ onEndReview }: FlashcardReviewProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState('Chapter 5: Orthogonality and Least Squares');
  const [selectedType, setSelectedType] = useState('Definitions');

  const currentCard = mockCards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / mockCards.length) * 100;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      } else if (e.key === 'ArrowLeft' && currentCardIndex > 0) {
        handlePrevious();
      } else if (e.key === 'ArrowRight' && currentCardIndex < mockCards.length - 1) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, currentCardIndex]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < mockCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    // In a real app, this would shuffle the cards array
    alert('Cards shuffled!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
            <span className="text-3xl">🧠</span>
          </div>
          <h1 className="text-white text-3xl mb-2">Linear Algebra Flashcards</h1>
          <p className="text-slate-400">Master the concepts through spaced repetition</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white appearance-none cursor-pointer hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Chapter 5: Orthogonality and Least Squares</option>
            <option>Chapter 4: Vector Spaces</option>
            <option>Chapter 3: Determinants</option>
          </select>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white appearance-none cursor-pointer hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Definitions</option>
            <option>Theorems</option>
            <option>Examples</option>
            <option>Proofs</option>
          </select>
        </div>

        {/* Card Container */}
        <div 
          className="relative cursor-pointer mb-8"
          onClick={handleFlip}
          style={{ perspective: '1000px', minHeight: '450px' }}
        >
          <div
            className={`relative w-full transition-all duration-500 ease-in-out`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front of Card */}
            <div
              className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-12 ${isFlipped ? 'invisible' : 'visible'}`}
              style={{
                backfaceVisibility: 'hidden',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {currentCard.type}
                </span>
              </div>
              
              <div 
                className="text-slate-200 text-xl leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: currentCard.front.replace(/\$\$/g, '$') }}
              />
              
              <div className="text-center">
                <p className="text-slate-500 text-sm">Click card or press Space to flip</p>
              </div>
            </div>

            {/* Back of Card */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-xl border border-purple-500/50 rounded-2xl shadow-2xl p-12 ${isFlipped ? 'visible' : 'invisible'}`}
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-pink-500/30 text-pink-300 rounded-full text-sm">
                  Answer
                </span>
              </div>
              
              <div 
                className="text-white text-lg leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: currentCard.back.replace(/\$\$/g, '$') }}
              />
              
              <div className="text-center">
                <p className="text-purple-300 text-sm">Click card or press Space to return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            disabled={currentCardIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all ${
              currentCardIndex === 0
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed border border-slate-700/30'
                : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700/50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>
          
          <div className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
            <span className="text-white">
              {currentCardIndex + 1} / {mockCards.length}
            </span>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            disabled={currentCardIndex === mockCards.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all ${
              currentCardIndex === mockCards.length - 1
                ? 'bg-slate-800/30 text-slate-600 cursor-not-allowed border border-slate-700/30'
                : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-700/50'
            }`}
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50"
          >
            <Shuffle className="w-4 h-4" />
            Shuffle Cards
          </button>
        </div>

        {/* Keyboard Shortcuts Hint */}
        <div className="mt-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4">
          <div className="flex justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <kbd className="px-3 py-1 bg-slate-700 rounded shadow-sm text-slate-300">Space</kbd>
              <span>Flip</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-3 py-1 bg-slate-700 rounded shadow-sm text-slate-300">←</kbd>
              <span>Previous</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-3 py-1 bg-slate-700 rounded shadow-sm text-slate-300">→</kbd>
              <span>Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
