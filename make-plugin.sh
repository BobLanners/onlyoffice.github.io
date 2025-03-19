#!/bin/bash

# CONFIGURATION
PLUGIN_NAME="helloworld"
PLUGIN_FOLDER="./sdkjs-plugins/content/$PLUGIN_NAME"
DEPLOY_FOLDER="$PLUGIN_FOLDER/deploy"
PLUGIN_OUTPUT="$DEPLOY_FOLDER/$PLUGIN_NAME.plugin"

# Step 1: Remove old .plugin file
echo "🗑 Removing old plugin..."
rm -f "$PLUGIN_OUTPUT"

# Step 2: Create new .plugin (excluding the deploy folder itself)
echo "📦 Creating new .plugin package..."
cd "$PLUGIN_FOLDER"
zip -r "$PLUGIN_NAME.plugin" * -x "deploy/*"
mv "$PLUGIN_NAME.plugin" "$DEPLOY_FOLDER"
cd -

# Step 3: Git commit & push
echo "📤 Committing and pushing to GitHub..."
git add .
git commit -m "Auto-deploy new plugin build"
git push origin master

echo "✅ Done! Plugin packaged and pushed."