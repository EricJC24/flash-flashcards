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

    let allFlashcards = [];
    let flashcards = [];
    let currentIndex = 0;

    // Load data
    if (window.flashcardsData) {
        console.log('Loaded flashcards:', window.flashcardsData.length);
        allFlashcards = window.flashcardsData;

        // Populate chapter filter
        populateChapterFilter();

        // Apply initial filter
        applyFilters();

        updateCounter();
        loadCard(currentIndex);
    } else {
        console.error('No flashcards data found. Make sure data.js is loaded.');
        cardFront.textContent = "Error loading data.";
    }

    // ... (listeners are fine)

    // Event Listeners
    cardContainer.addEventListener('click', () => {
        cardContainer.querySelector('.card').classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent flip
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === ' ' || e.key === 'Enter') {
            cardContainer.querySelector('.card').classList.toggle('flipped');
        }
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Minimum distance for swipe

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
                // Swiped right -> go to previous card
                if (currentIndex > 0) {
                    prevBtn.click();
                }
            } else {
                // Swiped left -> go to next card
                if (currentIndex < flashcards.length - 1) {
                    nextBtn.click();
                }
            }
        }
    }

    function loadCard(index) {
        // Reset flip
        const card = cardContainer.querySelector('.card');
        card.classList.remove('flipped');

        // Update content
        const data = flashcards[index];
        if (!data) return; // Safety check

        cardType.textContent = data.type;
        cardFront.textContent = data.front;

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

        // Render Math
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            window.MathJax.typesetPromise([cardFront, cardBack]).catch((err) => console.log(err));
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

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function formatLaTeX(text) {
        // Basic formatting for text mode LaTeX commands
        let formatted = text;

        // Bold
        formatted = formatted.replace(/\\textbf\{(.*?)\}/g, '<b>$1</b>');

        // Italic
        formatted = formatted.replace(/\\textit\{(.*?)\}/g, '<i>$1</i>');

        // Emph
        formatted = formatted.replace(/\\emph\{(.*?)\}/g, '<em>$1</em>');

        // Lists (simple heuristic)
        // Replace \item with bullet
        formatted = formatted.replace(/\\item\s*/g, '<br>• ');

        // Remove \begin{enumerate}, \end{enumerate}, etc.
        formatted = formatted.replace(/\\begin\{(enumerate|itemize)\}/g, '');
        formatted = formatted.replace(/\\end\{(enumerate|itemize)\}/g, '');

        // Newlines - handle LaTeX \\ line breaks
        // In JSON, \\ becomes \\\\ which becomes \\ when loaded as a string
        formatted = formatted.replace(/\\\\/g, '<br>');
        formatted = formatted.replace(/\n\n/g, '<br><br>');

        return formatted;
    }

    function populateChapterFilter() {
        // Get unique sections with their titles
        const sectionMap = new Map();
        allFlashcards.forEach(card => {
            if (card.section && !sectionMap.has(card.section)) {
                sectionMap.set(card.section, card.section_title || card.section);
            }
        });

        // Sort alphabetically by section code
        const sortedSections = Array.from(sectionMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

        // Add options
        sortedSections.forEach(([code, title]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = title;
            chapterFilter.appendChild(option);
        });
    }

    function applyFilters() {
        const selectedSection = chapterFilter.value;
        const selectedType = typeFilter.value;

        flashcards = allFlashcards.filter(card => {
            const sectionMatch = selectedSection === 'all' || card.section === selectedSection;
            const typeMatch = selectedType === 'all' || card.category === selectedType;
            return sectionMatch && typeMatch;
        });

        // Reset to first card if current index is out of bounds
        if (currentIndex >= flashcards.length) {
            currentIndex = 0;
        }

        console.log(`Filtered to ${flashcards.length} cards (Section: ${selectedSection}, Type: ${selectedType})`);
    }
});
