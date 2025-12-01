/**
 * Configuration for API endpoints
 * Automatically detects environment (development vs production)
 */

const Config = {
    // Automatically detect if we're in production or development
    isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',

    get apiBaseURL() {
        if (this.isDevelopment) {
            return 'http://localhost:5001';
        } else {
            // In production (Render), the Flask server serves both frontend and API
            // So we use the same origin for API calls
            return window.location.origin;
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Config;
}
