#!/bin/bash

# 🚀 INSIDIOUS BULLS - GITHUB PUSH SCRIPT

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                   PUSHING TO GITHUB                           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Current status
echo "📊 Git Status:"
git status --short | head -5
echo ""

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║          ✅ SUCCESS! CODE IS NOW ON GITHUB! ✅                ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📍 Your GitHub Repository:"
    echo "   https://github.com/ankiiitt40/insidiousbullsssss"
    echo ""
    echo "🎉 Next Steps:"
    echo "   1. Visit your GitHub repo"
    echo "   2. Customize the code"
    echo "   3. Deploy to Vercel/Netlify"
    echo ""
else
    echo ""
    echo "❌ Push failed! Check your internet connection and token."
    echo ""
fi
