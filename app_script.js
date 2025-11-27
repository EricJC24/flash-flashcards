/**
 * Flashcard Learning System with Spaced Repetition
 * Integrates with Flask backend for authentication and progress tracking
 */

document.addEventListener('DOMContentLoaded', async () => {
    // Authentication Elements
    const authModal = document.getElementById('authModal');
    const authForm = document.getElementById('authForm');
    const authTitle = document.getElementById('authTitle');
    const authSubmit = document.getElementById('authSubmit');
    const authSwitchText = document.getElementById('authSwitchText');
    const authSwitchLink = document.getElementById('authSwitchLink');
    const authError = document.getElementById('authError');

    // App Elements
    const appContainer = document.getElementById('appContainer');
    const userDisplay = document.getElementById('userDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    // Card Elements
    const cardContainer = document.getElementById('cardContainer');
    const cardFront = document.getElementById('cardFront');
    const cardBack = document.getElementById('cardBack');
    const cardType = document.getElementById('cardType');

    // Control Elements
    const counter = document.getElementById('counter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const progressBar = document.getElementById('progress');
    const chapterFilter = document.getElementById('chapterFilter');
    const typeFilter = document.getElementById('typeFilter');

    // Rating Elements
    const ratingButtons = document.getElementById('ratingButtons');
    const ratingBtns = document.querySelectorAll('.rating-btn');

    // Stats Elements
    const dueToday = document.getElementById('dueToday');
    const reviewsToday = document.getElementById('reviewsToday');
    const totalReviews = document.getElementById('totalReviews');

    // State
    let isLoginMode = true;
    let currentUser = null;
    let allFlashcards = [];
    let flashcards = [];
    let currentIndex = 0;
    let currentCardId = null;

    // ========================================================================
    // Initialization
    // ========================================================================

    // Check if user is already logged in
    const userData = await api.getCurrentUser();
    if (userData && userData.user) {
        currentUser = userData.user;
        showApp();
    } else {
        showAuthModal();
    }

    // ========================================================================
    // Authentication
    // ========================================================================

    function showAuthModal() {
        authModal.style.display = 'flex';
        appContainer.style.display = 'none';
    }

    function showApp() {
        authModal.style.display = 'none';
        appContainer.style.display = 'block';
        userDisplay.textContent = `👤 ${currentUser.username}`;

        // Load flashcards and stats
        initializeApp();
    }

    authSwitchLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLoginMode = !isLoginMode;

        if (isLoginMode) {
            authTitle.textContent = 'Login';
            authSubmit.textContent = 'Login';
            authSwitchText.textContent = "Don't have an account?";
            authSwitchLink.textContent = 'Register';
        } else {
            authTitle.textContent = 'Register';
            authSubmit.textContent = 'Register';
            authSwitchText.textContent = 'Already have an account?';
            authSwitchLink.textContent = 'Login';
        }
        authError.textContent = '';
    });

    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        authError.textContent = '';

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            let result;
            if (isLoginMode) {
                result = await api.login(username, password);
            } else {
                result = await api.register(username, password);
            }

            if (result.success) {
                currentUser = result.user;
                showApp();
            } else {
                authError.textContent = result.error || 'An error occurred';
            }
        } catch (error) {
            authError.textContent = 'Server error. Make sure the backend is running.';
            console.error('Auth error:', error);
        }
    });

    logoutBtn.addEventListener('click', async () => {
        await api.logout();
        currentUser = null;
        showAuthModal();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });

    // ========================================================================
    // App Initialization
    // ========================================================================

    async function initializeApp() {
        // Load all flashcards from data.js
        if (window.flashcardsData) {
            allFlashcards = window.flashcardsData.map((card, index) => ({
                ...card,
                id: `${card.type}_${index}` // Create unique ID
            }));

            // Populate filters
            populateChapterFilter();
            applyFilters();

            // Load stats
            await updateStats();

            // Load first card
            if (flashcards.length > 0) {
                loadCard(currentIndex);
            }
        } else {
            console.error('No flashcards data found');
            cardFront.textContent = 'Error: No flashcard data loaded';
        }
    }

    async function updateStats() {
        try {
            const stats = await api.getStats();
            dueToday.textContent = stats.due_today || 0;
            reviewsToday.textContent = stats.reviews_today || 0;
            totalReviews.textContent = stats.total_reviews || 0;
        } catch (error) {
            console.error('Failed to load stats:', error);
        }
    }

    // ========================================================================
    // Card Display
    // ========================================================================

    function loadCard(index) {
        const card = cardContainer.querySelector('.card');
        card.classList.remove('flipped');

        const data = flashcards[index];
        if (!data) return;

        currentCardId = data.id;
        cardType.textContent = data.type;
        cardFront.textContent = data.front;

        if (data.image) {
            cardBack.innerHTML = formatLaTeX(data.back) +
                `<br><br><img src="${data.image}" alt="${data.title}">`;
        } else {
            cardBack.innerHTML = formatLaTeX(data.back);
        }

        // Hide rating buttons when loading new card
        ratingButtons.style.display = 'none';

        updateCounter();
        updateButtons();
        updateProgress();

        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            window.MathJax.typesetPromise([cardFront, cardBack]).catch(err => console.log(err));
        }
    }

    function updateCounter() {
        counter.textContent = `${currentIndex + 1} / ${flashcards.length}`;
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === flashcards.length - 1;
    }

    function updateProgress() {
        const progress = ((currentIndex + 1) / flashcards.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function formatLaTeX(text) {
        let formatted = text;
        formatted = formatted.replace(/\\textbf\{(.*?)\}/g, '<b>$1</b>');
        formatted = formatted.replace(/\\textit\{(.*?)\}/g, '<i>$1</i>');
        formatted = formatted.replace(/\\emph\{(.*?)\}/g, '<em>$1</em>');
        formatted = formatted.replace(/\\item\s*/g, '<br>• ');
        formatted = formatted.replace(/\\begin\{(enumerate|itemize)\}/g, '');
        formatted = formatted.replace(/\\end\{(enumerate|itemize)\}/g, '');
        formatted = formatted.replace(/\\\\/g, '<br>');
        formatted = formatted.replace(/\n\n/g, '<br><br>');
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
            option.textContent = `Chapter ${id}: ${title}`;
            chapterFilter.appendChild(option);
        });
    }

    function applyFilters() {
        const selectedChapter = chapterFilter.value;
        const selectedType = typeFilter.value;

        flashcards = allFlashcards.filter(card => {
            const chapterMatch = selectedChapter === 'all' || card.chapter_id == selectedChapter;
            const typeMatch = selectedType === 'all' || card.category === selectedType;
            return chapterMatch && typeMatch;
        });

        if (currentIndex >= flashcards.length) {
            currentIndex = 0;
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // ========================================================================
    // Event Listeners
    // ========================================================================

    cardContainer.addEventListener('click', () => {
        const card = cardContainer.querySelector('.card');
        const isFlipped = card.classList.contains('flipped');
        card.classList.toggle('flipped');

        // Show rating buttons when card is flipped
        if (!isFlipped) {
            ratingButtons.style.display = 'flex';
        } else {
            ratingButtons.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            currentIndex--;
            loadCard(currentIndex);
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex < flashcards.length - 1) {
            currentIndex++;
            loadCard(currentIndex);
        }
    });

    shuffleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shuffleArray(flashcards);
        currentIndex = 0;
        loadCard(currentIndex);
    });

    chapterFilter.addEventListener('change', () => {
        applyFilters();
        currentIndex = 0;
        loadCard(currentIndex);
    });

    typeFilter.addEventListener('change', () => {
        applyFilters();
        currentIndex = 0;
        loadCard(currentIndex);
    });

    // Rating button clicks
    ratingBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const rating = parseInt(btn.dataset.rating);
            await handleRating(rating);
        });
    });

    document.addEventListener('keydown', async (e) => {
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === ' ' || e.key === 'Enter') {
            cardContainer.querySelector('.card').classList.toggle('flipped');
        }

        // Keyboard shortcuts for rating
        const card = cardContainer.querySelector('.card');
        if (card.classList.contains('flipped')) {
            if (e.key === '1') await handleRating(0); // Again
            if (e.key === '2') await handleRating(1); // Hard
            if (e.key === '3') await handleRating(2); // Good
            if (e.key === '4') await handleRating(3); // Easy
        }
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;

    cardContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    cardContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0 && currentIndex > 0) {
                prevBtn.click();
            } else if (swipeDistance < 0 && currentIndex < flashcards.length - 1) {
                nextBtn.click();
            }
        }
    }, { passive: true });

    // ========================================================================
    // Spaced Repetition
    // ========================================================================

    async function handleRating(rating) {
        try {
            const result = await api.rateCard(currentCardId, rating);

            if (result.success) {
                // Update stats
                await updateStats();

                // Move to next card
                if (currentIndex < flashcards.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }

                loadCard(currentIndex);
            }
        } catch (error) {
            console.error('Failed to rate card:', error);
            alert('Error saving rating. Please try again.');
        }
    }
});
