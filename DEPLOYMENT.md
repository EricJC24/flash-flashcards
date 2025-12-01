# Flash Flashcard App - Deployment Checklist

## Pre-Deployment Setup

### 1. Update Production Backend URL

Before deploying, you need to know your backend URL. After creating your Render/Railway service, update `config.js`:

```javascript
// In config.js, replace the production URL:
return 'https://YOUR-APP-NAME.onrender.com';  // or .up.railway.app
```

---

## Backend Deployment (Render)

### Step 1: Create GitHub Repository (if not already done)

```bash
cd /Users/ericpite/Documents/projects/tmp/Flash
git init
git add .
git commit -m "Initial commit with authentication"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/flash-cards.git
git push -u origin main
```

### Step 2: Deploy to Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `flash-cards-api` (or your choice)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn server:app`
   - **Plan**: `Free`

5. Click "Create Web Service"
6. Wait for deployment (3-5 minutes)
7. Copy your service URL (e.g., `https://flash-cards-api.onrender.com`)

### Step 3: Update Config with Backend URL

```bash
# Edit config.js and replace YOUR_BACKEND_URL_HERE with your Render URL
# Example: 'https://flash-cards-api.onrender.com'
```

### Step 4: Update CORS in server.py

Add your Netlify URL to CORS once you deploy frontend (see Step 7).

---

## Frontend Deployment (Netlify)

### Step 5: Install Netlify CLI (if not already installed)

```bash
npm install -g netlify-cli
```

### Step 6: Login to Netlify

```bash
netlify login
```

### Step 7: Deploy to Netlify

```bash
cd /Users/ericpite/Documents/projects/tmp/Flash
netlify deploy --prod
```

When prompted:
- **Publish directory**: `.` (just press Enter)
- Netlify will upload all files and give you a URL

### Step 8: Update CORS for Your Netlify URL

1. Note your Netlify URL (e.g., `https://flash-cards-xyz.netlify.app`)
2. In Render dashboard, add environment variable:
   - Key: `NETLIFY_URL`
   - Value: Your Netlify URL
3. Or manually edit `server.py` CORS origins to include your Netlify URL
4. Redeploy the backend if needed

---

## Testing Production Deployment

### 1. Open Your Netlify URL

Visit your Netlify URL in a browser.

### 2. Test Authentication

- Click "Register"
- Create a new account
- Verify successful login

### 3. Test Flashcard Features

- Study a few flashcards
- Rate them with different ratings
- Verify stats update
- Refresh page and verify session persists

### 4. Check Browser Console

Press F12 → Console tab. Look for:
- ✅ No CORS errors
- ✅ Successful API requests to your Render backend
- ❌ Any errors (fix before proceeding)

---

## Important Notes

> [!WARNING]
> **Render Free Tier Database Reset**: Your SQLite database will be deleted every time Render restarts your service (after ~15 minutes of inactivity). User data will be lost unless you upgrade to a paid plan or migrate to PostgreSQL.

> [!TIP]
> **For Persistent Free Tier**: Use Railway instead of Render. Railway's free tier includes persistent storage for SQLite databases.

---

## Railway Alternative (Recommended for Free Tier)

If you want persistent database on free tier:

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Python and deploys
6. Copy your Railway URL (e.g., `https://flash-cards.up.railway.app`)
7. Update `config.js` with Railway URL
8. Deploy to Netlify as above

---

## Troubleshooting

**CORS Errors?**
- Verify Netlify URL is added to `server.py` CORS origins
- Check Render logs for CORS-related errors

**Backend Not Responding?**
- Check Render/Railway logs
- Verify gunicorn is starting correctly
- Test backend directly: `https://your-backend.onrender.com/api/auth/me`

**Database Issues?**
- Remember: Render free tier resets database on restart
- Consider Railway or Render PostgreSQL for persistence

**Authentication Failing?**
- Check browser console for API errors
- Verify `credentials: 'include'` in fetch calls
- Check that cookies are allowed in browser
