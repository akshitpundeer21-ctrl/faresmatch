#!/bin/bash

# FaresMatch - GitHub Upload Script

echo "🚀 Preparing FaresMatch for GitHub..."

# Initialize git if not already done
if [ ! -d .git ]; then
  git init
  echo "✅ Git repository initialized"
fi

# Add all files
git add .
echo "✅ Files staged"

# Commit
git commit -m "Initial commit: FaresMatch AI-powered travel booking app

Features:
- Flight search and booking with filters
- Hotel search and booking
- AI trip builder with budget and interests
- Itinerary timeline view with edit mode
- Group collaboration support
- Budget tracking with charts
- Trending fares carousel
- Auth flow with AsyncStorage
- React Native + Expo + TypeScript
- NativeWind (Tailwind CSS)
- Zustand state management
- Victory Native charts
- Lucide React Native icons"

echo "✅ Changes committed"

echo ""
echo "📦 Next steps:"
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "2. Run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/faresmatch.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "✨ Done! Your app is ready to push to GitHub."
