/**
 * Chapter Dashboard Script
 * Shows chapter progress with simplified stats
 */

document.addEventListener('DOMContentLoaded', () => {
    const baseURL = Config.apiBaseURL;

    let chaptersData = [];
    let filterStatus = 'all';
    let expandedChapter = null;
    let bookmarkedCardIds = new Set();
    let hiddenCardIds = new Set();

    // Initialize after login
    window.addEventListener('userLoggedIn', async () => {
        const username = Auth.currentUser?.username || 'User';
        document.getElementById('userName').textContent = username;

        await init();
    });

    async function init() {
        await Promise.all([
            fetchBookmarks(),
            fetchHiddenCards()
        ]);
        await loadFlashcardData();
        calculateChapterStats();
        render();
    }

    async function fetchBookmarks() {
        try {
            const response = await fetch(`${baseURL}/api/bookmarks`, { credentials: 'include' });
            if (response.ok) {
                const data = await response.json();
                bookmarkedCardIds = new Set(data.bookmarks);
            }
        } catch (error) {
            console.error('Failed to fetch bookmarks:', error);
        }
    }

    async function fetchHiddenCards() {
        try {
            const response = await fetch(`${baseURL}/api/hidden`, { credentials: 'include' });
            if (response.ok) {
                const data = await response.json();
                hiddenCardIds = new Set(data.hidden);
            }
        } catch (error) {
            console.error('Failed to fetch hidden cards:', error);
        }
    }

    async function loadFlashcardData() {
        if (!window.flashcardsData) {
            console.error('Flashcard data not loaded');
            return;
        }

        // Group cards by chapter
        const cardsByChapter = {};
        window.flashcardsData.forEach(card => {
            const chapterId = card.chapter_id;
            if (!chapterId) return;

            if (!cardsByChapter[chapterId]) {
                cardsByChapter[chapterId] = {
                    chapterNumber: chapterId,
                    chapterName: card.chapter_title || `Chapter ${chapterId}`,
                    cards: []
                };
            }

            cardsByChapter[chapterId].cards.push(card);
        });

        chaptersData = Object.values(cardsByChapter).sort((a, b) => a.chapterNumber - b.chapterNumber);
    }

    function calculateChapterStats() {
        chaptersData.forEach(chapter => {
            let hiddenCount = 0;
            let bookmarkedCount = 0;

            chapter.cards.forEach(card => {
                if (hiddenCardIds.has(card.id)) hiddenCount++;
                if (bookmarkedCardIds.has(card.id)) bookmarkedCount++;
            });

            chapter.totalCards = chapter.cards.length;
            chapter.hiddenCount = hiddenCount;
            chapter.bookmarkedCount = bookmarkedCount;
            chapter.unhiddenCount = chapter.totalCards - hiddenCount;
        });
    }

    function render() {
        renderStats();
        renderChapterList();
    }

    function renderStats() {
        const totalCards = chaptersData.reduce((sum, ch) => sum + ch.totalCards, 0);
        const totalHidden = chaptersData.reduce((sum, ch) => sum + ch.hiddenCount, 0);
        const totalBookmarked = chaptersData.reduce((sum, ch) => sum + ch.bookmarkedCount, 0);
        const totalUnhidden = totalCards - totalHidden;

        document.getElementById('totalCards').textContent = totalCards;
        document.getElementById('totalHidden').textContent = totalHidden;
        document.getElementById('totalBookmarked').textContent = totalBookmarked;
        document.getElementById('totalUnhidden').textContent = totalUnhidden;
    }

    function renderChapterList() {
        const chapterList = document.getElementById('chapterList');
        chapterList.innerHTML = '';

        chaptersData.forEach(chapter => {
            const isExpanded = expandedChapter === chapter.chapterNumber;
            const progress = (chapter.hiddenCount / chapter.totalCards) * 100;

            const chapterCard = document.createElement('div');
            chapterCard.className = 'chapter-card';

            // Chapter Header
            const header = document.createElement('div');
            header.className = 'chapter-header';
            header.onclick = () => toggleChapter(chapter.chapterNumber);

            header.innerHTML = `
                <div class="chapter-header-content">
                    <div class="chapter-left">
                        <div class="chapter-number">Ch ${chapter.chapterNumber}</div>
                        <div class="chapter-info">
                            <h3 class="chapter-title">${chapter.chapterNumber}. ${chapter.chapterName}</h3>
                            <div class="chapter-stats">
                                <span class="stat-total">${chapter.totalCards} cards</span>
                                ${chapter.bookmarkedCount > 0 ? `<span class="stat-bookmarked">${chapter.bookmarkedCount} bookmarked</span>` : ''}
                                <span class="stat-hidden">${chapter.hiddenCount} hidden</span>
                            </div>
                        </div>
                    </div>
                    <div class="chapter-right">
                        <div class="chapter-progress">
                            <div class="progress-value">${progress.toFixed(0)}%</div>
                            <div class="progress-label">Hidden</div>
                        </div>
                        <svg class="chapter-expand-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            ${isExpanded ?
                    '<polyline points="18 15 12 9 6 15"></polyline>' :
                    '<polyline points="6 9 12 15 18 9"></polyline>'
                }
                        </svg>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            `;

            chapterCard.appendChild(header);

            // Expanded Content
            if (isExpanded) {
                const content = document.createElement('div');
                content.className = 'chapter-content';

                // Filter cards based on selection if we add local filters later, for now show all
                const cardsToShow = chapter.cards;

                content.innerHTML = `
                    <div class="chapter-content-header">
                        <h4>Cards in Chapter (${cardsToShow.length})</h4>
                    </div>
                    <div class="card-list">
                        ${cardsToShow.map(card => renderCard(card)).join('')}
                    </div>
                `;
                chapterCard.appendChild(content);
            }

            chapterList.appendChild(chapterCard);
        });
    }

    function renderCard(card) {
        const isHidden = hiddenCardIds.has(card.id);
        const isBookmarked = bookmarkedCardIds.has(card.id);

        return `
            <div class="card-item ${isHidden ? 'card-hidden' : ''}">
                <div class="card-content">
                    <div class="card-left">
                        <div class="card-badges">
                            <span class="card-badge badge-type">${card.type}</span>
                            ${isBookmarked ? '<span class="card-badge badge-bookmarked">Bookmarked</span>' : ''}
                            ${isHidden ? '<span class="card-badge badge-hidden">Hidden</span>' : ''}
                        </div>
                        <div class="card-front">${card.front}</div>
                    </div>
                </div>
            </div>
        `;
    }

    function toggleChapter(chapterNumber) {
        expandedChapter = expandedChapter === chapterNumber ? null : chapterNumber;
        render();
    }

    // Filter chips (if we want to filter the chapter list view later)
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Logic for filtering chapters could go here
        });
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        Auth.logout();
    });
});
