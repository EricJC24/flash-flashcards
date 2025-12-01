import { useState } from 'react';
import { BookOpen, TrendingDown, Clock, Play, ChevronDown, ChevronUp } from 'lucide-react';

interface Card {
  id: string;
  front: string;
  chapter: string;
  type: string;
  status: 'new' | 'learning' | 'struggling' | 'mastered';
  ease: number;
  lastReviewed?: Date;
  nextReview?: Date;
  attempts: number;
}

interface ChapterProgress {
  chapterName: string;
  chapterNumber: number;
  totalCards: number;
  masteredCards: number;
  learningCards: number;
  newCards: number;
  strugglingCards: number;
  averageEase: number;
  cards: Card[];
}

export function ChapterDashboard() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  // Mock data - replace with real data from your backend
  const chaptersData: ChapterProgress[] = [
    {
      chapterName: 'Orthogonality and Least Squares',
      chapterNumber: 5,
      totalCards: 24,
      masteredCards: 12,
      learningCards: 8,
      newCards: 2,
      strugglingCards: 2,
      averageEase: 2.3,
      cards: [
        {
          id: '1',
          front: 'What is the definition of a least-squares solution?',
          chapter: 'Chapter 5',
          type: 'Definition',
          status: 'struggling',
          ease: 1.8,
          attempts: 5,
          lastReviewed: new Date('2025-11-29'),
          nextReview: new Date('2025-11-30')
        },
        {
          id: '2',
          front: 'Prove that the columns of an orthogonal matrix form an orthonormal basis',
          chapter: 'Chapter 5',
          type: 'Proof',
          status: 'learning',
          ease: 2.2,
          attempts: 3,
          lastReviewed: new Date('2025-11-28'),
          nextReview: new Date('2025-12-01')
        },
        {
          id: '3',
          front: 'What is the Gram-Schmidt Process?',
          chapter: 'Chapter 5',
          type: 'Definition',
          status: 'new',
          ease: 2.5,
          attempts: 0
        },
        {
          id: '4',
          front: 'How do you compute the QR factorization of a matrix?',
          chapter: 'Chapter 5',
          type: 'Example',
          status: 'learning',
          ease: 2.1,
          attempts: 2,
          lastReviewed: new Date('2025-11-27'),
          nextReview: new Date('2025-11-30')
        }
      ]
    },
    {
      chapterName: 'Vector Spaces',
      chapterNumber: 4,
      totalCards: 32,
      masteredCards: 18,
      learningCards: 10,
      newCards: 3,
      strugglingCards: 1,
      averageEase: 2.5,
      cards: [
        {
          id: '5',
          front: 'What is the dimension of a vector space?',
          chapter: 'Chapter 4',
          type: 'Definition',
          status: 'struggling',
          ease: 1.9,
          attempts: 6,
          lastReviewed: new Date('2025-11-29'),
          nextReview: new Date('2025-11-30')
        },
        {
          id: '6',
          front: 'Prove that a basis is linearly independent',
          chapter: 'Chapter 4',
          type: 'Proof',
          status: 'learning',
          ease: 2.3,
          attempts: 2,
          lastReviewed: new Date('2025-11-28'),
          nextReview: new Date('2025-12-02')
        },
        {
          id: '7',
          front: 'What is a subspace?',
          chapter: 'Chapter 4',
          type: 'Definition',
          status: 'new',
          ease: 2.5,
          attempts: 0
        }
      ]
    },
    {
      chapterName: 'Determinants',
      chapterNumber: 3,
      totalCards: 18,
      masteredCards: 8,
      learningCards: 6,
      newCards: 1,
      strugglingCards: 3,
      averageEase: 2.1,
      cards: [
        {
          id: '8',
          front: 'What is the cofactor expansion method?',
          chapter: 'Chapter 3',
          type: 'Definition',
          status: 'struggling',
          ease: 1.7,
          attempts: 7,
          lastReviewed: new Date('2025-11-29'),
          nextReview: new Date('2025-11-30')
        },
        {
          id: '9',
          front: 'Compute the determinant of a 3x3 matrix',
          chapter: 'Chapter 3',
          type: 'Example',
          status: 'struggling',
          ease: 1.8,
          attempts: 5,
          lastReviewed: new Date('2025-11-28'),
          nextReview: new Date('2025-11-30')
        }
      ]
    },
    {
      chapterName: 'Matrix Algebra',
      chapterNumber: 2,
      totalCards: 28,
      masteredCards: 22,
      learningCards: 4,
      newCards: 0,
      strugglingCards: 2,
      averageEase: 2.7,
      cards: [
        {
          id: '10',
          front: 'What is matrix multiplication?',
          chapter: 'Chapter 2',
          type: 'Definition',
          status: 'struggling',
          ease: 1.9,
          attempts: 4,
          lastReviewed: new Date('2025-11-28'),
          nextReview: new Date('2025-12-01')
        }
      ]
    }
  ];

  const toggleChapter = (chapterNumber: number) => {
    setExpandedChapter(expandedChapter === chapterNumber ? null : chapterNumber);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'learning': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'struggling': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'mastered': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
    }
  };

  const getEaseColor = (ease: number) => {
    if (ease >= 2.5) return 'text-green-400';
    if (ease >= 2.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getUnmasteredCards = (cards: Card[]) => {
    return cards.filter(c => c.status !== 'mastered');
  };

  const getTotalUnmastered = () => {
    return chaptersData.reduce((sum, chapter) => 
      sum + chapter.newCards + chapter.learningCards + chapter.strugglingCards, 0
    );
  };

  const getChapterProgress = (chapter: ChapterProgress) => {
    return (chapter.masteredCards / chapter.totalCards) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white text-3xl">Chapter Progress</h1>
              <p className="text-slate-400">Track your mastery across all chapters</p>
            </div>
          </div>

        </div>

        {/* Chapter Cards */}
        <div className="space-y-4">
          {chaptersData.map((chapter) => {
            const unmasteredCards = getUnmasteredCards(chapter.cards);
            const progress = getChapterProgress(chapter);
            const isExpanded = expandedChapter === chapter.chapterNumber;

            return (
              <div
                key={chapter.chapterNumber}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden"
              >
                {/* Chapter Header */}
                <div
                  className="p-6 cursor-pointer hover:bg-slate-800/70 transition-colors"
                  onClick={() => toggleChapter(chapter.chapterNumber)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400">Ch {chapter.chapterNumber}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-lg mb-1">
                          Chapter {chapter.chapterNumber}: {chapter.chapterName}
                        </h3>
                        <div className="flex gap-4 text-sm">
                          <span className="text-green-400">{chapter.masteredCards} mastered</span>
                          {chapter.strugglingCards > 0 && (
                            <span className="text-red-400">{chapter.strugglingCards} struggling</span>
                          )}
                          {chapter.learningCards > 0 && (
                            <span className="text-yellow-400">{chapter.learningCards} learning</span>
                          )}
                          {chapter.newCards > 0 && (
                            <span className="text-blue-400">{chapter.newCards} new</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right mr-4">
                        <div className="text-2xl text-white mb-1">{progress.toFixed(0)}%</div>
                        <div className="text-xs text-slate-400">Complete</div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Expanded Card List */}
                {isExpanded && unmasteredCards.length > 0 && (
                  <div className="border-t border-slate-700/50 p-6 bg-slate-900/30">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white">
                        Unmastered Cards ({unmasteredCards.length})
                      </h4>
                      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        <Play className="w-4 h-4" />
                        Review These
                      </button>
                    </div>

                    <div className="space-y-3">
                      {unmasteredCards.map((card) => (
                        <div
                          key={card.id}
                          className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(card.status)}`}>
                                  {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
                                </span>
                                <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs">
                                  {card.type}
                                </span>
                              </div>
                              <p className="text-slate-200 mb-2">{card.front}</p>
                              <div className="flex items-center gap-4 text-xs text-slate-400">
                                {card.attempts > 0 && (
                                  <span>Attempts: {card.attempts}</span>
                                )}
                                {card.lastReviewed && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    Last: {new Date(card.lastReviewed).toLocaleDateString()}
                                  </span>
                                )}
                                {card.nextReview && (
                                  <span>
                                    Next: {new Date(card.nextReview).toLocaleDateString()}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="flex items-center gap-1 mb-1">
                                <TrendingDown className={`w-4 h-4 ${getEaseColor(card.ease)}`} />
                                <span className={`text-sm ${getEaseColor(card.ease)}`}>
                                  {card.ease.toFixed(1)}
                                </span>
                              </div>
                              <div className="text-xs text-slate-500">ease</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isExpanded && unmasteredCards.length === 0 && (
                  <div className="border-t border-slate-700/50 p-6 bg-slate-900/30 text-center">
                    <p className="text-slate-400">
                      All cards in this chapter are mastered! 🎉
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {getTotalUnmastered() === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-white text-2xl mb-2">Congratulations!</h2>
            <p className="text-slate-400">You've mastered all cards across all chapters!</p>
          </div>
        )}
      </div>
    </div>
  );
}
