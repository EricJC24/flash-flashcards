import { TrendingUp, Calendar, Award, Target, Clock, Zap } from 'lucide-react';

export function Statistics() {
  // Mock statistics data
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
    { date: '2025-11-26', reviews: 18, accuracy: 75 },
    { date: '2025-11-25', reviews: 32, accuracy: 79 },
    { date: '2025-11-24', reviews: 28, accuracy: 81 },
    { date: '2025-11-23', reviews: 22, accuracy: 77 },
    { date: '2025-11-22', reviews: 26, accuracy: 80 },
    { date: '2025-11-21', reviews: 30, accuracy: 83 }
  ];

  const maxReviews = Math.max(...recentActivity.map(a => a.reviews));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-2xl mb-2">Learning Statistics</h2>
        <p className="text-slate-400">Track your progress and performance over time</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-white">Total Cards</h3>
          </div>
          <div className="text-3xl text-white mb-2">{stats.totalCards}</div>
          <div className="flex gap-4 text-sm">
            <div>
              <span className="text-green-400">{stats.masteredCards}</span>
              <span className="text-slate-500"> mastered</span>
            </div>
            <div>
              <span className="text-blue-400">{stats.learningCards}</span>
              <span className="text-slate-500"> learning</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-white">Total Reviews</h3>
          </div>
          <div className="text-3xl text-white mb-2">{stats.totalReviews}</div>
          <div className="text-sm">
            <span className="text-slate-400">This week: </span>
            <span className="text-blue-400">{stats.reviewsThisWeek}</span>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-white">Current Streak</h3>
          </div>
          <div className="text-3xl text-white mb-2">{stats.currentStreak} days</div>
          <div className="text-sm">
            <span className="text-slate-400">Longest: </span>
            <span className="text-orange-400">{stats.longestStreak} days</span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" />
            Accuracy Rate
          </h3>
          <div className="text-4xl text-white mb-4">{stats.accuracy}%</div>
          <div className="h-3 bg-slate-900/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
              style={{ width: `${stats.accuracy}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
          <h3 className="text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            Average Ease
          </h3>
          <div className="text-4xl text-white mb-4">{stats.averageEase.toFixed(1)}</div>
          <p className="text-sm text-slate-400">
            Higher ease means you're retaining information better
          </p>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-white mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-400" />
          Recent Activity
        </h3>
        
        <div className="space-y-3">
          {recentActivity.map((day, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-24 text-sm text-slate-400">
                {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-8 bg-slate-900/50 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-end px-3"
                      style={{ width: `${(day.reviews / maxReviews) * 100}%` }}
                    >
                      <span className="text-white text-xs">{day.reviews}</span>
                    </div>
                  </div>
                  <div className="w-16 text-sm text-right">
                    <span className={day.accuracy >= 80 ? 'text-green-400' : day.accuracy >= 70 ? 'text-yellow-400' : 'text-orange-400'}>
                      {day.accuracy}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700/50 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl text-white mb-1">{stats.reviewsThisWeek}</div>
            <div className="text-sm text-slate-400">This Week</div>
          </div>
          <div>
            <div className="text-2xl text-white mb-1">{stats.reviewsThisMonth}</div>
            <div className="text-sm text-slate-400">This Month</div>
          </div>
          <div>
            <div className="text-2xl text-white mb-1">
              {Math.round(stats.reviewsThisMonth / 30)}
            </div>
            <div className="text-sm text-slate-400">Avg/Day</div>
          </div>
        </div>
      </div>

      {/* Card Distribution */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Card Distribution
        </h3>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Mastered</span>
              <span className="text-green-400">{stats.masteredCards} cards ({Math.round(stats.masteredCards / stats.totalCards * 100)}%)</span>
            </div>
            <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600"
                style={{ width: `${(stats.masteredCards / stats.totalCards) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Learning</span>
              <span className="text-blue-400">{stats.learningCards} cards ({Math.round(stats.learningCards / stats.totalCards * 100)}%)</span>
            </div>
            <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: `${(stats.learningCards / stats.totalCards) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">New</span>
              <span className="text-purple-400">{stats.newCards} cards ({Math.round(stats.newCards / stats.totalCards * 100)}%)</span>
            </div>
            <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-600"
                style={{ width: `${(stats.newCards / stats.totalCards) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/30 rounded-xl p-6">
        <h3 className="text-white mb-4">🏆 Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-sm text-slate-300">Week Warrior</div>
            <div className="text-xs text-slate-400">7 day streak</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm text-slate-300">Century Club</div>
            <div className="text-xs text-slate-400">100+ reviews</div>
          </div>
          <div className="text-center opacity-50">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-sm text-slate-300">Perfect Week</div>
            <div className="text-xs text-slate-400">Locked</div>
          </div>
          <div className="text-center opacity-50">
            <div className="text-3xl mb-2">💎</div>
            <div className="text-sm text-slate-300">Master</div>
            <div className="text-xs text-slate-400">Locked</div>
          </div>
        </div>
      </div>
    </div>
  );
}
