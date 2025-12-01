#!/bin/bash

# Flash Flashcard App Startup Script
# This script starts both servers and opens the app in your default browser

echo "🚀 Starting Flash Flashcard App..."

# Get the directory where this script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# Kill any existing servers on ports 5001 and 8000
echo "🧹 Cleaning up any existing servers..."
lsof -ti:5001 | xargs kill -9 2>/dev/null
lsof -ti:8000 | xargs kill -9 2>/dev/null

# Start Flask backend server in background
echo "🔧 Starting Flask backend on http://localhost:5001..."
source venv/bin/activate
python3 server.py > flask.log 2>&1 &
FLASK_PID=$!

# Wait a moment for Flask to start
sleep 2

# Start HTTP server in background
echo "🌐 Starting web server on http://localhost:8000..."
python3 -m http.server 8000 > http.log 2>&1 &
HTTP_PID=$!

# Wait a moment for HTTP server to start
sleep 1

# Open browser
echo "🌍 Opening browser..."
open http://localhost:8000/index.html

echo ""
echo "✅ Flash Flashcard App is running!"
echo ""
echo "📊 Servers:"
echo "   - Flask Backend: http://localhost:5001 (PID: $FLASK_PID)"
echo "   - Web Server: http://localhost:8000 (PID: $HTTP_PID)"
echo ""
echo "📝 Logs:"
echo "   - Flask: flask.log"
echo "   - HTTP: http.log"
echo ""
echo "🛑 To stop all servers, run: ./stop.sh"
echo ""
echo "Press Ctrl+C to view this message again, or close this terminal to keep servers running in background."

# Save PIDs for stop script
echo $FLASK_PID > .flask.pid
echo $HTTP_PID > .http.pid

# Keep script running to show any immediate errors
sleep 3

echo "✨ Setup complete! The app should now be open in your browser."
