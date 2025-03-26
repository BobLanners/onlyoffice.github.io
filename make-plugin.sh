#!/bin/bash

# ------------------------------
# Configuration
# ------------------------------
PLUGIN_NAME="helloworld"
PLUGIN_FOLDER="./sdkjs-plugins/content/$PLUGIN_NAME"
DEPLOY_FOLDER="$PLUGIN_FOLDER/deploy"
PLUGIN_OUTPUT="$PLUGIN_NAME.plugin"

# ------------------------------
# Step 1: Clean up old .plugin file
# ------------------------------
echo "🗑 Removing old plugin (if any)..."
rm -f "$DEPLOY_FOLDER/$PLUGIN_OUTPUT"

# ------------------------------
# Step 2: Build new .plugin file
# ------------------------------
echo "📦 Creating new .plugin package..."
cd "$PLUGIN_FOLDER" || { echo "❌ Failed to enter plugin folder"; exit 1; }

# Zip everything except the deploy folder itself
zip -r "$PLUGIN_OUTPUT" * -x "deploy/*"

# Ensure deploy folder exists and move new plugin into it
mkdir -p deploy
mv "$PLUGIN_OUTPUT" "deploy/$PLUGIN_OUTPUT"

cd - > /dev/null || exit 1

# ------------------------------
# Step 3: Push to GitHub (optional)
# ------------------------------
echo "📤 Committing and pushing changes to GitHub..."
git add .
git commit -m "Update plugin package: $PLUGIN_NAME"
git push origin master

# ------------------------------
# Done!
# ------------------------------
echo "✅ Plugin packaged and deployed successfully!"