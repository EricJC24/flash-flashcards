import { Calendar, TrendingUp, Award, Clock, Play, Filter } from 'lucide-react';
import { useState } from 'react';

interface DashboardProps {
  onStartReview: () => void;
}

export function Dashboard({ onStartReview }: DashboardProps) {
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Mock data
  const stats = {
    cardsDueToday: 24,
    reviewedToday: 12,
    totalCardsReviewed: 156,
    totalReviews: 438,
    averageEase: 2.6,
    streak: 7
  };

  const chapters = ['All Chapters', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'];
  const types = ['All Types', 'Definitions', 'Theorems', 'Examples', 'Proofs'];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
        <h2 className="text-white text-2xl mb-2">Ready to learn?</h2>
        <p className="text-slate-300 mb-6">You have {stats.cardsDueToday} cards due for review today</p>
        <button
          onClick={onStartReview}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/50"
        >
          <Play className="w-5 h-5" />
          Start Review Session
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xs text-slate-400">Today</span>
          </div>
          <div className="text-3xl text-white mb-1">{stats.cardsDueToday}</div>
          <div className="text-sm text-slate-400">Cards Due</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xs text-slate-400">Progress</span>
          </div>
          <div className="text-3xl text-white mb-1">{stats.reviewedToday}</div>
          <div className="text-sm text-slate-400">Reviewed Today</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xs text-slate-400">Total</span>
          </div>
          <div className="text-3xl text-white mb-1">{stats.totalCardsReviewed}</div>
          <div className="text-sm text-slate-400">Cards Mastered</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-xs text-slate-400">Streak</span>
          </div>
          <div className="text-3xl text-white mb-1">{stats.streak}</div>
          <div className="text-sm text-slate-400">Days</div>
        </div>
      </div>

      {/* Filters & Settings */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-slate-400" />
          <h3 className="text-white">Review Filters</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Chapter</label>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {chapters.map((chapter) => (
                <option key={chapter} value={chapter.toLowerCase()}>
                  {chapter}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Card Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {types.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-white mb-4">Learning Progress</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Today's Goal</span>
              <span className="text-purple-400">{stats.reviewedToday}/{stats.cardsDueToday}</span>
            </div>
            <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
                style={{ width: `${(stats.reviewedToday / stats.cardsDueToday) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
            <div>
              <div className="text-2xl text-white mb-1">{stats.totalReviews}</div>
              <div className="text-sm text-slate-400">Total Reviews</div>
            </div>
            <div>
              <div className="text-2xl text-white mb-1">{stats.averageEase.toFixed(1)}</div>
              <div className="text-sm text-slate-400">Average Ease</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-white mb-3">💡 Pro Tips</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>• Use keyboard shortcuts: Space to flip, 1-4 to rate</li>
          <li>• Review cards consistently for best retention</li>
          <li>• Be honest with your ratings for optimal scheduling</li>
          <li>• Pause and resume anytime without losing progress</li>
        </ul>
      </div>
    </div>
  );
}
