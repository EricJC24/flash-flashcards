import urllib.request
import urllib.parse
import urllib.error
import sqlite3
import time
import json
import http.cookiejar

BASE_URL = "http://localhost:5001"
DB_PATH = "database/flashcards.db"

# Setup cookie jar for session management
cookie_jar = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cookie_jar))
urllib.request.install_opener(opener)

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def make_request(endpoint, method="GET", data=None):
    url = f"{BASE_URL}{endpoint}"
    headers = {'Content-Type': 'application/json'}
    
    if data:
        json_data = json.dumps(data).encode('utf-8')
    else:
        json_data = None

    req = urllib.request.Request(url, data=json_data, headers=headers, method=method)
    
    try:
        with urllib.request.urlopen(req) as response:
            if response.status != 200:
                print(f"❌ Request failed: {response.status}")
                return None
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.URLError as e:
        print(f"❌ Connection failed: {e}")
        return None

def run_tests():
    print("🚀 Starting Persistence Tests (using urllib)...")
    
    # 1. Create a unique test user
    username = f"test_user_{int(time.time())}"
    password = "password123"
    
    print(f"\n👤 Creating test user: {username}")
    
    # Register
    resp = make_request("/api/auth/register", "POST", {
        "username": username,
        "password": password
    })
    
    if not resp:
        print("❌ Registration failed. Make sure server is running on port 5001")
        return
        
    user_id = resp['user']['id']
    print("✅ User registered successfully")

    # Login
    resp = make_request("/api/auth/login", "POST", {
        "username": username,
        "password": password
    })
    
    if not resp:
        print("❌ Login failed")
        return
    print("✅ Logged in successfully")

    # ========================================================================
    # TEST 1: BOOKMARK PERSISTENCE
    # ========================================================================
    print("\n📚 TEST 1: Bookmark Persistence")
    card_id = "test_chapter_1_card_1"
    
    # Toggle Bookmark ON
    print(f"   Action: Toggling bookmark ON for {card_id}")
    resp = make_request(f"/api/bookmarks/{card_id}", "POST")
    if not resp: return
    
    # Verify via API
    print("   Verifying via API...")
    resp = make_request("/api/bookmarks")
    bookmarks = resp['bookmarks']
    if card_id in bookmarks:
        print("   ✅ API reports card is bookmarked")
    else:
        print(f"   ❌ API failed to return bookmark. Got: {bookmarks}")
        
    # Verify via Database
    print("   Verifying via Database...")
    conn = get_db_connection()
    row = conn.execute("SELECT * FROM bookmarks WHERE user_id = ? AND card_id = ?", (user_id, card_id)).fetchone()
    if row:
        print("   ✅ Database contains bookmark record")
    else:
        print("   ❌ Database missing bookmark record")
    conn.close()
    
    # Toggle Bookmark OFF
    print(f"   Action: Toggling bookmark OFF for {card_id}")
    make_request(f"/api/bookmarks/{card_id}", "POST")
    
    # Verify Removal
    resp = make_request("/api/bookmarks")
    bookmarks = resp['bookmarks']
    if card_id not in bookmarks:
        print("   ✅ API reports bookmark removed")
    else:
        print("   ❌ API still shows bookmark")

    # ========================================================================
    # TEST 2: SPACED REPETITION PERSISTENCE
    # ========================================================================
    print("\n🧠 TEST 2: Spaced Repetition Persistence")
    sr_card_id = "test_chapter_1_card_2"
    
    # Initial State Check
    conn = get_db_connection()
    row = conn.execute("SELECT * FROM card_progress WHERE user_id = ? AND card_id = ?", (user_id, sr_card_id)).fetchone()
    if not row:
        print("   ✅ No initial progress record (expected)")
    conn.close()
    
    # Submit Rating (3 = Easy)
    print(f"   Action: Rating card {sr_card_id} as 'Easy' (3)")
    resp = make_request("/api/cards/rate", "POST", {
        "card_id": sr_card_id,
        "rating": 3
    })
    
    if not resp: return
        
    print(f"   API Response: Next review in {resp.get('interval_days')} days")
    
    # Verify Database Update
    print("   Verifying via Database...")
    conn = get_db_connection()
    row = conn.execute("SELECT * FROM card_progress WHERE user_id = ? AND card_id = ?", (user_id, sr_card_id)).fetchone()
    
    if row:
        print("   ✅ Database record created")
        print(f"      - Ease Factor: {row['ease_factor']} (Expected > 2.5)")
        print(f"      - Interval: {row['interval']} (Expected > 0)")
        print(f"      - Reviews: {row['reviews_count']} (Expected 1)")
        
        if row['ease_factor'] > 2.5 and row['interval'] > 0:
            print("   ✅ Persistence confirmed: Progress saved correctly")
        else:
            print("   ⚠️ Data saved but values look unexpected")
    else:
        print("   ❌ Database record missing after rating")
    conn.close()

    print("\n✨ All tests completed!")

if __name__ == "__main__":
    run_tests()
