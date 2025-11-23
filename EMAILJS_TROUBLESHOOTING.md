# EmailJS Vercel Deployment Fix Guide

## Common Issues and Solutions

### 1. Environment Variables Setup in Vercel

**In your Vercel dashboard:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:
   - `REACT_APP_EMAILJS_SERVICE_ID` = `service_ma6jzlj`
   - `REACT_APP_EMAILJS_TEMPLATE_ID` = `template_sykfpfn`
   - `REACT_APP_EMAILJS_PUBLIC_KEY` = `3F0TrdMjykpNA4fMT`

### 2. EmailJS Service Configuration

**Check your EmailJS dashboard:**
1. Go to https://dashboard.emailjs.com/
2. Navigate to "Email Services" → Your service
3. **CRITICAL:** Add your Vercel domain to "Allowed Origins"
   - Add: `https://your-app-name.vercel.app`
   - Add: `https://*.vercel.app` (for preview deployments)
   - Keep: `http://localhost:3000` (for local development)

### 3. Template Configuration

**In EmailJS Template settings:**
1. Ensure your template uses these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{reply_to}}`

### 4. Browser Console Debugging

**To debug on Vercel:**
1. Open your deployed site
2. Open browser DevTools (F12)
3. Try sending an email
4. Check Console for error messages
5. Look for specific error codes:
   - `403`: CORS/Origin issue
   - `422`: Template parameter mismatch
   - `400`: Invalid request format

### 5. Test Script for Production

Run this in your browser console on the deployed site:

```javascript
// Test EmailJS in production
emailjs.send('service_ma6jzlj', 'template_sykfpfn', {
  from_name: 'Test User',
  from_email: 'test@example.com',
  message: 'Test message'
}, '3F0TrdMjykpNA4fMT').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  }
);
```

### 6. Alternative Solution: Use EmailJS REST API

If the browser SDK continues to fail, we can implement a serverless function approach.

## Next Steps

1. **Deploy the updated code** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Update EmailJS allowed origins** 
4. **Test the contact form** on your live site
5. **Check browser console** for any remaining errors

Let me know which step needs more assistance!