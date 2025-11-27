#!/usr/bin/env python3
"""
Create a test user account
"""
import sqlite3
import hashlib

DB_PATH = 'database/flashcards.db'

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Create user
username = 'eric'
password = 'eric123'  # Changed to meet 6 char minimum
password_hash = hash_password(password)

conn = sqlite3.connect(DB_PATH)
try:
    conn.execute(
        'INSERT INTO users (username, password_hash) VALUES (?, ?)',
        (username, password_hash)
    )
    conn.commit()
    print(f"✅ Created user: {username}")
except sqlite3.IntegrityError:
    print(f"⚠️  User '{username}' already exists")
finally:
    conn.close()
