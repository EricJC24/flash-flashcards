#!/usr/bin/env python3
"""
Clear today's review data to allow fresh start with new card ID format.
This preserves user account but removes reviews from today only.
"""

import sqlite3
from datetime import date

# Connect to database
conn = sqlite3.connect('database/flashcards.db')
cursor = conn.cursor()

# Delete reviews from today
today = date.today().isoformat()
cursor.execute("DELETE FROM review_log WHERE DATE(reviewed_at) = ?", (today,))
deleted_reviews = cursor.rowcount

print(f"Deleted {deleted_reviews} reviews from today ({today})")

# Commit and close
conn.commit()
conn.close()

print("Database cleaned. You can now start fresh with the corrected card IDs.")
