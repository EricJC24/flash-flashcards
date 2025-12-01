# Deploying Flash Flashcards to Netlify (Static Version)

This app has been simplified to work as a pure static site - no backend server required! All your data (bookmarks and hidden cards) is stored locally in your browser's localStorage.

## Features

✅ **No authentication** - Opens directly to your flashcards
✅ **localStorage storage** - Bookmark and hide cards
✅ **PWA support** - Add to iPhone home screen
✅ **Completely free** - No server costs
✅ **Instant loading** - Static site performance

## Quick Deploy

### Option 1: Deploy with Netlify CLI (Fastest)

```bash
# Install Netlify CLI (if you haven't already)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod
```

When prompted:
- **Publish directory**: `.` (current directory)
- **Site name**: Choose your preferred name (e.g., `flash-flashcards`)

Your site will be live at: `https://YOUR-SITE-NAME.netlify.app`

### Option 2: Deploy via Netlify Dashboard

1. **Go to Netlify**: https://app.netlify.com

2. **Drag and Drop**:
   - Click "Add new site" → "Deploy manually"
   - Drag your entire project folder into the upload area
   - Netlify will deploy it immediately

3. **Your site is live!**
   - You'll get a URL like: `https://random-name-12345.netlify.app`
   - You can change the name in Site settings

### Option 3: Deploy from GitHub (Recommended for updates)

1. **Push to GitHub** (if you haven't already):
   ```bash
   git add .
   git commit -m "Simplified for static Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `flash-flashcards` repository

3. **Configure build settings**:
   - **Build command**: Leave empty
   - **Publish directory**: `.`
   - Click "Deploy site"

4. **Auto-deploys enabled**:
   - Every time you push to GitHub, Netlify automatically redeploys
   - No manual updates needed!

## Custom Domain (Optional)

To use `laharvardflashcards.com`:

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `laharvardflashcards.com`
4. Follow instructions to update your DNS records
5. Netlify provides free SSL automatically

## Important Notes

### Data Storage

⚠️ **Your data is stored locally in your browser**:
- Bookmarks and hidden cards are saved in localStorage
- Data persists across sessions
- **BUT**: Clearing browser data will erase your bookmarks/hidden cards
- Data is **not synced** between devices

### Backup Your Data

To backup your bookmarks and hidden cards:

```javascript
// In browser console:
const data = Storage.exportData();
console.log(JSON.stringify(data));
// Copy this JSON and save it somewhere safe
```

To restore from backup:

```javascript
// In browser console:
const backup = {/* paste your backup JSON here */};
Storage.importData(backup);
```

### Using on Multiple Devices

Since data is stored locally, you'll have separate bookmarks/hidden cards on each device:
- iPhone will have its own set
- Computer will have its own set
- Incognito/Private mode starts fresh

**Workaround**: Manually export/import data to sync between devices.

## PWA / iPhone Home Screen

Your app is already configured as a PWA! To add to iPhone home screen:

1. Open your Netlify URL in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"

The app will open full-screen without Safari's UI, just like a native app!

## File Structure

Your static site includes:
- `index.html` - Main flashcard interface
- `dashboard.html` - Chapter progress view
- `script.js` - Main app logic
- `dashboard_script.js` - Dashboard logic
- `storage.js` - localStorage management
- `data.js` - Your flashcard content
- `style.css` - Styles
- `manifest.json` - PWA configuration
- `service-worker.js` - Offline support
- `icons/` - App icons for PWA

**Not included** (backend files):
- `server.py` - No longer needed
- `auth.js` - Removed
- `config.js` - Removed
- Database files - Not needed

## Updating Your Flashcards

To add/edit flashcards:

1. Edit `data.js`
2. Commit and push (if using GitHub integration):
   ```bash
   git add data.js
   git commit -m "Update flashcards"
   git push origin main
   ```
3. Netlify automatically redeploys

Or if using manual deploy:
```bash
netlify deploy --prod
```

## Troubleshooting

### Site not loading
- Check that `index.html` exists in the root
- Make sure netlify.toml is configured correctly
- Check Netlify deploy logs for errors

### PWA not working
- PWA requires HTTPS (Netlify provides this automatically)
- Clear browser cache and try again
- Make sure `manifest.json` and `service-worker.js` are accessible

### Lost my bookmarks
- Check if you're in incognito/private mode
- Make sure you didn't clear browser data
- Check if you're on the same device/browser
- Restore from backup if you have one

### Icons not showing
- Make sure `/icons/` folder is deployed
- Check that icons are PNG format
- Clear cache and reload

## Costs

**Netlify Free Tier includes:**
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ Free SSL certificates
- ✅ Custom domains
- ✅ Automatic deployments from Git

**Perfect for personal use!** You'll likely never exceed the free tier limits for a flashcard app.

## Migrating from the Backend Version

If you were using the backend version with authentication:

Your old data (bookmarks/hidden cards) was stored in the server database and won't transfer automatically. You can manually re-bookmark and hide cards, or:

1. Export data from old version (if still accessible)
2. Convert to localStorage format
3. Import using browser console

## Next Steps

1. ✅ Deploy to Netlify
2. ✅ Add to iPhone home screen
3. ✅ Bookmark your favorite cards
4. ✅ Hide mastered cards
5. ✅ (Optional) Set up custom domain

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [PWA Guide](https://web.dev/progressive-web-apps/)
- Check browser console for errors (F12 → Console)

---

**Enjoy your flashcards!** 📚✨

No servers, no databases, no authentication - just pure static simplicity.
