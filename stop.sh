#!/bin/bash

# Flash Flashcard App Stop Script
# This script stops both servers

echo "🛑 Stopping Flash Flashcard App..."

# Get the directory where this script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# Kill servers by PID if available
if [ -f .flask.pid ]; then
    FLASK_PID=$(cat .flask.pid)
    echo "Stopping Flask server (PID: $FLASK_PID)..."
    kill $FLASK_PID 2>/dev/null
    rm .flask.pid
fi

if [ -f .http.pid ]; then
    HTTP_PID=$(cat .http.pid)
    echo "Stopping HTTP server (PID: $HTTP_PID)..."
    kill $HTTP_PID 2>/dev/null
    rm .http.pid
fi

# Also kill by port as backup
echo "Cleaning up any remaining servers on ports 5001 and 8000..."
lsof -ti:5001 | xargs kill -9 2>/dev/null
lsof -ti:8000 | xargs kill -9 2>/dev/null

echo "✅ All servers stopped!"
