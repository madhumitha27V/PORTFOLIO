#!/bin/bash

echo "🚀 Deploying Portfolio with EmailJS fixes..."

# Build the project
echo "📦 Building React app..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps for Vercel deployment:"
    echo "1. Push changes to your GitHub repository"
    echo "2. Go to your Vercel dashboard"
    echo "3. Add environment variables:"
    echo "   - REACT_APP_EMAILJS_SERVICE_ID=service_ma6jzlj"
    echo "   - REACT_APP_EMAILJS_TEMPLATE_ID=template_sykfpfn"
    echo "   - REACT_APP_EMAILJS_PUBLIC_KEY=3F0TrdMjykpNA4fMT"
    echo "4. Update EmailJS allowed origins to include your Vercel domain"
    echo "5. Redeploy your app"
    echo ""
    echo "🔍 For troubleshooting, check EMAILJS_TROUBLESHOOTING.md"
else
    echo "❌ Build failed! Please fix errors before deploying."
fi