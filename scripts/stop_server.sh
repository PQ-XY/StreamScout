#!/bin/bash

# Navigate to your app directory
cd /home/ubuntu/StreamScoutApp

# Stop backend process
echo "Stopping backend..."
pkill -f 'java -jar app.jar' || true

# Stop frontend server if you started one manually
# pkill -f 'serve -s frontend_build' || true

echo "Application stopped."

