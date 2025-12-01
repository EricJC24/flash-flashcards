#!/bin/bash
set -e

echo "🔧 Starting build process..."

# Create database directory if it doesn't exist
mkdir -p database

# Initialize the database
echo "📊 Initializing database..."
python3 server.py &
SERVER_PID=$!
sleep 2
kill $SERVER_PID || true

echo "✅ Build completed successfully!"
