/**
 * Authentication Management
 * Handles login, register, logout, and session management
 */

const Auth = {
    baseURL: Config.apiBaseURL,
    currentUser: null,

    async init() {
        // Check if user is already logged in
        await this.checkSession();
        this.setupEventListeners();
    },

    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const showRegisterBtn = document.getElementById('showRegister');
        const showLoginBtn = document.getElementById('showLogin');
        const logoutBtn = document.getElementById('logoutBtn');

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        if (showRegisterBtn) {
            showRegisterBtn.addEventListener('click', () => this.switchToRegister());
        }

        if (showLoginBtn) {
            showLoginBtn.addEventListener('click', () => this.switchToLogin());
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
    },

    switchToRegister() {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('registerSection').style.display = 'block';
        this.clearErrors();
    },

    switchToLogin() {
        document.getElementById('registerSection').style.display = 'none';
        document.getElementById('loginSection').style.display = 'block';
        this.clearErrors();
    },

    async handleLogin(e) {
        e.preventDefault();
        this.clearErrors();

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch(`${this.baseURL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                this.currentUser = data.user;
                localStorage.setItem('user', JSON.stringify(data.user));
                this.onLoginSuccess();
            } else {
                this.showError('loginError', data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            this.showError('loginError', 'Network error. Make sure the server is running on port 5000.');
        }
    },

    async handleRegister(e) {
        e.preventDefault();
        this.clearErrors();

        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirm').value;

        // Validation
        if (password.length < 6) {
            this.showError('registerError', 'Password must be at least 6 characters');
            return;
        }

        if (password !== confirmPassword) {
            this.showError('registerError', 'Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`${this.baseURL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                this.currentUser = data.user;
                localStorage.setItem('user', JSON.stringify(data.user));
                this.onLoginSuccess();
            } else {
                this.showError('registerError', data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Register error:', error);
            this.showError('registerError', 'Network error. Make sure the server is running on port 5000.');
        }
    },

    async checkSession() {
        try {
            const response = await fetch(`${this.baseURL}/api/auth/me`, {
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                this.currentUser = data.user;
                localStorage.setItem('user', JSON.stringify(data.user));
                this.onLoginSuccess();
            } else {
                this.showAuthModal();
            }
        } catch (error) {
            console.error('Session check error:', error);
            this.showAuthModal();
        }
    },

    async logout() {
        try {
            await fetch(`${this.baseURL}/api/auth/logout`, {
                method: 'POST',
                credentials: 'include'
            });
        } catch (error) {
            console.error('Logout error:', error);
        }

        this.currentUser = null;
        localStorage.removeItem('user');
        localStorage.removeItem('studySession');
        this.showAuthModal();

        // Reload page to reset state
        window.location.reload();
    },

    onLoginSuccess() {
        // Hide auth modal
        const authModal = document.getElementById('authModal');
        if (authModal) {
            authModal.style.display = 'none';
        }

        // Show main app
        const mainApp = document.getElementById('mainApp');
        if (mainApp) {
            mainApp.style.display = 'flex';
        }

        // Update username display
        const usernameDisplay = document.getElementById('usernameDisplay');
        if (usernameDisplay && this.currentUser) {
            usernameDisplay.textContent = this.currentUser.username;
        }

        // Initialize stats and study mode
        if (window.Stats) {
            window.Stats.init();
            window.Stats.refresh();
        }

        // Dispatch event for other components
        window.dispatchEvent(new CustomEvent('userLoggedIn', {
            detail: this.currentUser
        }));
    },

    showAuthModal() {
        const authModal = document.getElementById('authModal');
        const mainApp = document.getElementById('mainApp');

        if (authModal) {
            authModal.style.display = 'flex';
        }

        if (mainApp) {
            mainApp.style.display = 'none';
        }

        this.switchToLogin();
    },

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    },

    clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
});
