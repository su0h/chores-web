#!/bin/bash

# (Potential) path to the main JavaScript file
MAIN_JS_FILE=$(find /usr/share/nginx/html/ -name "main-*.js" | head -n 1)

# Check if the main file exists
if [ ! -f "$MAIN_JS_FILE" ]; then
  echo "Error: Angular's main JavaScript file not found! Are you sure it was copied to .../nginx/html correctly?"
  exit 1
else
  echo "Main JavaScript file found: $MAIN_JS_FILE"
fi

# Check if API_BASE_URL was provided
if [ -z "$API_BASE_URL" ]; then
  echo "API_BASE_URL environment variable is not set."
  exit 1
else
  echo "Using API_BASE_URL from environment variable: $API_BASE_URL"
fi

# Path to the environment file
TEMP_FILE="/usr/share/nginx/html/main.tmp.js"

echo "Updating $MAIN_JS_FILE with API_BASE_URL: $API_BASE_URL"
envsubst '${API_BASE_URL}' < "$MAIN_JS_FILE" > "$TEMP_FILE" && mv "$TEMP_FILE" "$MAIN_JS_FILE"

# Start Nginx"
echo "Done. You may now access the web application."
nginx -g 'daemon off;'
