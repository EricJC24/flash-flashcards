/**
 * LocalStorage-based storage system for flashcard app
 * No backend required - all data stored in browser
 */

const Storage = {
    // Keys for localStorage
    BOOKMARKS_KEY: 'flash_bookmarks',
    HIDDEN_KEY: 'flash_hidden',

    // Get bookmarked card IDs
    getBookmarks() {
        try {
            const data = localStorage.getItem(this.BOOKMARKS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading bookmarks:', error);
            return [];
        }
    },

    // Get hidden card IDs
    getHidden() {
        try {
            const data = localStorage.getItem(this.HIDDEN_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading hidden cards:', error);
            return [];
        }
    },

    // Toggle bookmark status
    toggleBookmark(cardId) {
        const bookmarks = this.getBookmarks();
        const index = bookmarks.indexOf(cardId);

        if (index > -1) {
            // Remove bookmark
            bookmarks.splice(index, 1);
        } else {
            // Add bookmark
            bookmarks.push(cardId);
        }

        localStorage.setItem(this.BOOKMARKS_KEY, JSON.stringify(bookmarks));
        return index === -1; // Return true if bookmarked, false if unbookmarked
    },

    // Toggle hidden status
    toggleHidden(cardId) {
        const hidden = this.getHidden();
        const index = hidden.indexOf(cardId);

        if (index > -1) {
            // Unhide
            hidden.splice(index, 1);
        } else {
            // Hide
            hidden.push(cardId);
        }

        localStorage.setItem(this.HIDDEN_KEY, JSON.stringify(hidden));
        return index === -1; // Return true if hidden, false if unhidden
    },

    // Check if card is bookmarked
    isBookmarked(cardId) {
        return this.getBookmarks().includes(cardId);
    },

    // Check if card is hidden
    isHidden(cardId) {
        return this.getHidden().includes(cardId);
    },

    // Clear all data (for testing/reset)
    clearAll() {
        localStorage.removeItem(this.BOOKMARKS_KEY);
        localStorage.removeItem(this.HIDDEN_KEY);
    },

    // Export data (for backup)
    exportData() {
        return {
            bookmarks: this.getBookmarks(),
            hidden: this.getHidden(),
            exportDate: new Date().toISOString()
        };
    },

    // Import data (from backup)
    importData(data) {
        if (data.bookmarks) {
            localStorage.setItem(this.BOOKMARKS_KEY, JSON.stringify(data.bookmarks));
        }
        if (data.hidden) {
            localStorage.setItem(this.HIDDEN_KEY, JSON.stringify(data.hidden));
        }
    }
};

// Make Storage available globally
window.Storage = Storage;
