/**
 * API Client for Spaced Repetition Backend
 */

const API_BASE = 'http://localhost:5000/api';

class APIClient {
    async register(username, password) {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });
        return await response.json();
    }

    async login(username, password) {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });
        return await response.json();
    }

    async logout() {
        const response = await fetch(`${API_BASE}/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        return await response.json();
    }

    async getCurrentUser() {
        const response = await fetch(`${API_BASE}/auth/me`, {
            credentials: 'include'
        });
        if (response.ok) {
            return await response.json();
        }
        return null;
    }

    async getDueCards(limit = 20) {
        const response = await fetch(`${API_BASE}/cards/due?limit=${limit}`, {
            credentials: 'include'
        });
        return await response.json();
    }

    async rateCard(card_id, rating) {
        const response = await fetch(`${API_BASE}/cards/rate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ card_id, rating })
        });
        return await response.json();
    }

    async getStats() {
        const response = await fetch(`${API_BASE}/stats`, {
            credentials: 'include'
        });
        return await response.json();
    }
}

const api = new APIClient();
