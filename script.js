document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');
    const cardType = document.getElementById('cardType');
    const counter = document.getElementById('counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const progressBar = document.getElementById('progress');
    const chapterFilter = document.getElementById('chapterFilter');
    const typeFilter = document.getElementById('typeFilter');
    const studyModeSelect = document.getElementById('studyMode');

    let allFlashcards = [];
    let flashcards = [];
    let bookmarkedCardIds = new Set();
    let hiddenCardIds = new Set();
    let currentIndex = 0;
    let currentStudyMode = 'all';

    // Initialize immediately (no auth required)
    async function init() {
        // Load flashcards data
        if (window.flashcardsData) {
            console.log('Loaded flashcards:', window.flashcardsData.length);
            allFlashcards = window.flashcardsData;

            // Generate card IDs
            allFlashcards.forEach((card, index) => {
                card.id = generateCardId(card, index);
            });

            // Populate chapter filter
            populateChapterFilter();

            // Load bookmarks and hidden cards from localStorage
            loadLocalData();

            // Restore session or apply initial filter
            restoreSession();

            updateCounter();
            loadCard(currentIndex);
        } else {
            console.error('No flashcards data found. Make sure data.js is loaded.');
            cardFront.textContent = "Error loading data.";
        }
    }

    function generateCardId(card, index) {
        // Create stable ID from chapter and title only (not index, as that changes with filtering)
        // Use front text as fallback if no title
        const titleSlug = (card.title || card.front || '').replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').substring(0, 50);
        // Add chapter and type for uniqueness
        return `${card.chapter_id || 0}_${card.category || card.type}_${titleSlug}`;
    }

    function loadLocalData() {
        // Load bookmarks and hidden cards from localStorage
        bookmarkedCardIds = new Set(Storage.getBookmarks());
        hiddenCardIds = new Set(Storage.getHidden());
        console.log(`Loaded ${bookmarkedCardIds.size} bookmarks and ${hiddenCardIds.size} hidden cards`);
    }

    function toggleBookmark(e) {
        e.stopPropagation(); // Prevent card flip

        const card = flashcards[currentIndex];
        if (!card) return;

        const btn = document.getElementById('bookmarkBtn');

        // Toggle bookmark in localStorage
        const isBookmarked = Storage.toggleBookmark(card.id);

        if (isBookmarked) {
            bookmarkedCardIds.add(card.id);
            btn.classList.add('active');
        } else {
            bookmarkedCardIds.delete(card.id);
            btn.classList.remove('active');
        }
    }

    function toggleHide(e) {
        e.stopPropagation(); // Prevent card flip

        const card = flashcards[currentIndex];
        if (!card) return;

        const btn = document.getElementById('hideBtn');

        // Toggle hidden status in localStorage
        const isHidden = Storage.toggleHidden(card.id);

        if (isHidden) {
            hiddenCardIds.add(card.id);
            btn.classList.add('active');
        } else {
            hiddenCardIds.delete(card.id);
            btn.classList.remove('active');
        }
    }

    // Event Listeners
    document.getElementById('bookmarkBtn').addEventListener('click', toggleBookmark);
    document.getElementById('hideBtn').addEventListener('click', toggleHide);

    cardContainer.addEventListener('click', (e) => {
        // Don't flip if clicking bookmark button (handled by stopPropagation, but extra safety)
        if (e.target.closest('.bookmark-btn')) return;

        cardContainer.querySelector('.card').classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            currentIndex--;
            loadCard(currentIndex);
            saveSession();
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex < flashcards.length - 1) {
            currentIndex++;
            loadCard(currentIndex);
            saveSession();
        }
    });

    shuffleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shuffleArray(flashcards);
        currentIndex = 0;
        loadCard(currentIndex);
        saveSession();
    });

    // chapterFilter listener moved to bottom to include stats refresh

    typeFilter.addEventListener('change', () => {
        applyFilters();
        currentIndex = 0;
        loadCard(currentIndex);
        saveSession();
    });

    studyModeSelect.addEventListener('change', async () => {
        currentStudyMode = studyModeSelect.value;

        // Fetch appropriate card list based on mode
        if (currentStudyMode === 'due') {
            await fetchDueCards();
        } else if (currentStudyMode === 'hard_again') {
            await fetchHardAgainCards();
        }

        applyFilters();
        currentIndex = 0;
        loadCard(currentIndex);
        saveSession();
    });


    document.addEventListener('keydown', (e) => {
        const card = cardContainer.querySelector('.card');

        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            card.classList.toggle('flipped');
        }
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;

    cardContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    cardContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                if (currentIndex > 0) {
                    prevBtn.click();
                }
            } else {
                if (currentIndex < flashcards.length - 1) {
                    nextBtn.click();
                }
            }
        }
    }


    function showNoDueCards() {
        cardFront.innerHTML = `
            <h2>🎉 All Caught Up!</h2>
            <p>No cards due for review right now.</p>
            <button onclick="document.getElementById('studyMode').value='all'; document.getElementById('studyMode').dispatchEvent(new Event('change'));" style="margin-top: 20px;">Study All Cards</button>
        `;
        cardBack.innerHTML = '<p>Great job staying on top of your reviews!</p>';
        counter.textContent = '0 / 0';
    }

    function loadCard(index) {
        if (flashcards.length === 0) {
            showNoDueCards();
            return;
        }

        // Reset flip
        const card = cardContainer.querySelector('.card');
        card.classList.remove('flipped');

        // Update content
        const data = flashcards[index];
        if (!data) return;

        cardType.textContent = data.type;
        cardFront.innerHTML = `<div>${data.front}</div>`;

        // Check if card has an image
        if (data.image) {
            cardBack.innerHTML = formatLaTeX(data.back) +
                `<br><br><img src="${data.image}" alt="${data.title}" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 10px;">`;
        } else {
            cardBack.innerHTML = formatLaTeX(data.back);
        }

        // Update UI
        updateCounter();
        updateButtons();
        updateProgress();

        // Update bookmark button state
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (bookmarkedCardIds.has(data.id)) { // Changed card.id to data.id
            bookmarkBtn.classList.add('active');
        } else {
            bookmarkBtn.classList.remove('active');
        }

        // Update hide button state
        const hideBtn = document.getElementById('hideBtn');
        if (hiddenCardIds.has(data.id)) {
            hideBtn.classList.add('active');
        } else {
            hideBtn.classList.remove('active');
        }

        // Render Math
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            window.MathJax.typesetPromise([cardFront, cardBack]).catch((err) => console.log(err));
        }
    }

    function updateCounter() {
        if (flashcards.length === 0) {
            counter.textContent = '0 / 0';
        } else {
            counter.textContent = `${currentIndex + 1} / ${flashcards.length}`;
        }
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0 || flashcards.length === 0;
        nextBtn.disabled = currentIndex === flashcards.length - 1 || flashcards.length === 0;
    }

    function updateProgress() {
        if (flashcards.length === 0) {
            progressBar.style.width = '0%';
        } else {
            const progress = ((currentIndex + 1) / flashcards.length) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function formatLaTeX(text) {
        let formatted = text;

        // Bold
        formatted = formatted.replace(/\\textbf\{(.*?)\}/g, '<b>$1</b>');

        // Italic
        formatted = formatted.replace(/\\textit\{(.*?)\}/g, '<i>$1</i>');

        // Emph
        formatted = formatted.replace(/\\emph\{(.*?)\}/g, '<em>$1</i>');

        // Lists
        formatted = formatted.replace(/\\item\s*/g, '<br>• ');
        formatted = formatted.replace(/\\begin\{(enumerate|itemize)\}/g, '');
        formatted = formatted.replace(/\\end\{(enumerate|itemize)\}/g, '');

        // Protect ALL math environments (inline and display)
        const mathEnvs = [];

        // Protect display math \[...\]
        formatted = formatted.replace(/\\\[([\s\S]*?)\\\]/g, (match) => {
            mathEnvs.push(match);
            return `__MATH_ENV_${mathEnvs.length - 1}__`;
        });

        // Protect inline math $...$
        formatted = formatted.replace(/\$([^\$]+)\$/g, (match) => {
            mathEnvs.push(match);
            return `__MATH_ENV_${mathEnvs.length - 1}__`;
        });

        // Handle LaTeX newlines and spacing (ONLY in non-math text now)
        formatted = formatted.replace(/\\\\\\\\/g, '<br>'); // Matches \\\\ in string (which is \\ in LaTeX)
        formatted = formatted.replace(/\\\\/g, '<br>');     // Matches \\ in string
        formatted = formatted.replace(/\\n/g, '<br>');      // Matches \n literal
        formatted = formatted.replace(/\n/g, '<br>');       // Matches actual newline

        // Clean up weird backslash artifacts often found in scraped data
        // Matches "\ a.", "\ b.", "\ c." etc. and converts to newline + letter
        formatted = formatted.replace(/\\ ([a-z])\./g, '<br>$1.');

        // Fix "then\ a." pattern specifically mentioned (and general "word\ a." pattern)
        formatted = formatted.replace(/([a-z])\\ ([a-z])\./g, '$1<br>$2.');

        // Restore math environments
        mathEnvs.forEach((env, i) => {
            formatted = formatted.replace(`__MATH_ENV_${i}__`, env);
        });

        return formatted;
    }

    function populateChapterFilter() {
        const chapters = new Map();
        allFlashcards.forEach(card => {
            if (card.chapter_id && !chapters.has(card.chapter_id)) {
                chapters.set(card.chapter_id, card.chapter_title);
            }
        });

        const sortedChapters = Array.from(chapters.entries()).sort((a, b) => a[0] - b[0]);

        sortedChapters.forEach(([id, title]) => {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = `${id}. ${title}`;
            chapterFilter.appendChild(option);
        });
    }

    function applyFilters() {
        const selectedChapter = chapterFilter.value;
        const selectedType = typeFilter.value;
        const studyMode = currentStudyMode;

        // Start with all cards
        let filtered = allFlashcards.filter(card => {
            const chapterMatch = selectedChapter === 'all' || card.chapter_id == selectedChapter;
            const typeMatch = selectedType === 'all' || card.category === selectedType;
            return chapterMatch && typeMatch;
        });

        // Filter by study mode
        switch (currentStudyMode) {
            case 'bookmarked':
                filtered = filtered.filter(card => bookmarkedCardIds.has(card.id));
                break;
            case 'unhidden':
                // Show only unhidden cards
                filtered = filtered.filter(card => !hiddenCardIds.has(card.id));
                break;
            case 'all':
            default:
                // In 'all' mode, show everything including hidden cards
                break;
        }
        flashcards = filtered;

        // Reset to first card if current index is out of bounds
        if (currentIndex >= flashcards.length) {
            currentIndex = 0;
        }

        console.log(`Filtered to ${flashcards.length} cards (Mode: ${studyMode}, Chapter: ${selectedChapter}, Type: ${selectedType})`);
    }

    // Session persistence
    function saveSession() {
        const session = {
            currentIndex,
            studyMode: currentStudyMode,
            chapterFilter: chapterFilter.value,
            typeFilter: typeFilter.value,
            timestamp: Date.now()
        };
        localStorage.setItem('studySession', JSON.stringify(session));
    }

    function restoreSession() {
        const savedSession = localStorage.getItem('studySession');
        if (savedSession) {
            try {
                const session = JSON.parse(savedSession);

                // Only restore if less than 24 hours old
                if (Date.now() - session.timestamp < 24 * 60 * 60 * 1000) {
                    currentStudyMode = session.studyMode || 'all';
                    studyModeSelect.value = currentStudyMode;
                    chapterFilter.value = session.chapterFilter || 'all';
                    typeFilter.value = session.typeFilter || 'all';

                    applyFilters();

                    currentIndex = Math.min(session.currentIndex || 0, flashcards.length - 1);

                    console.log('Session restored');
                    return;
                }
            } catch (error) {
                console.error('Failed to restore session:', error);
            }
        }

        // No valid session, apply default filters
        applyFilters();
    }

    // Update stats when chapter changes
    chapterFilter.addEventListener('change', () => {
        applyFilters();
        currentIndex = 0;
        loadCard(currentIndex);
        saveSession();
    });

    // Initialize the app immediately
    init();
});
