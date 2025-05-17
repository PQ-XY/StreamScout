#!/bin/bash

# Navigate to your app directory
cd /home/ubuntu/StreamScoutApp

# Stop any existing backend process (assumes you have a way to identify the process)
echo "Stopping existing backend if running..."
pkill -f 'java -jar app.jar' || true

# Start backend (run in background, redirect logs)
echo "Starting backend..."
nohup java -jar app.jar > backend.log 2>&1 &

# Start frontend server if needed (e.g., serve React build with serve)
# If you serve frontend as static files via a web server (like nginx), you can skip this
# For example:
# nohup serve -s frontend_build > frontend.log 2>&1 &

echo "Application started."

