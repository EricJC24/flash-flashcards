/**
 * Statistics Display
 * Fetches and displays user progress statistics
 */

const Stats = {
    baseURL: Config.apiBaseURL,

    init() {
        this.refresh();
    },

    async refresh(chapterCardIds = null) {
        try {
            let url = `${this.baseURL}/api/stats/detailed`;
            if (chapterCardIds && chapterCardIds.length > 0) {
                url += `?card_ids=${chapterCardIds.join(',')}`;
            }

            const response = await fetch(url, {
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Stats API response:', data);
                this.updateDisplay(data);
            } else {
                console.error('Failed to fetch stats, status:', response.status);
            }
        } catch (error) {
            console.error('Stats fetch error:', error);
        }
    },

    updateDisplay(stats) {
        const dueElement = document.getElementById('statDue');
        const totalElement = document.getElementById('statTotal');
        const todayElement = document.getElementById('statToday');
        const dueLabel = document.querySelector('#statDue + .stat-label');

        if (dueElement) {
            dueElement.textContent = stats.reviewed_today_hard_again || 0;
            // Make it look clickable
            dueElement.parentElement.style.cursor = 'pointer';
            dueElement.parentElement.onclick = () => {
                if (window.startHardAgainSession) {
                    window.startHardAgainSession();
                }
            };
        }

        if (dueLabel) {
            dueLabel.textContent = 'Hard/Again Today';
        }

        if (totalElement) {
            totalElement.textContent = stats.total_reviews || 0;
        }

        if (todayElement) {
            todayElement.textContent = stats.reviews_today || 0;
        }
    }
};

// Export for use in other modules
window.Stats = Stats;
