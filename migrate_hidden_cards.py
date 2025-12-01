import sqlite3

DB_PATH = 'database/flashcards.db'

def migrate():
    conn = sqlite3.connect(DB_PATH)
    try:
        conn.execute('''
        CREATE TABLE IF NOT EXISTS hidden_cards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            card_id TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, card_id)
        )
        ''')
        conn.execute('CREATE INDEX IF NOT EXISTS idx_hidden_cards_user_id ON hidden_cards(user_id)')
        conn.commit()
        print("Migration successful: hidden_cards table created.")
    except Exception as e:
        print(f"Migration failed: {e}")
    finally:
        conn.close()

if __name__ == '__main__':
    migrate()
