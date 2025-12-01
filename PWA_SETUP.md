# Progressive Web App (PWA) Setup for iPhone

This guide shows you how to make your Flash flashcard app work as an iPhone home screen app.

## What's Already Configured

✅ **manifest.json** - PWA configuration
✅ **iOS meta tags** - Apple-specific settings
✅ **Service Worker** - Offline functionality
✅ **Standalone display** - Runs like a native app

## Step 1: Create App Icons

You need icons in various sizes for iOS. Here are your options:

### Option A: Use an Online Icon Generator (Easiest)

1. **Create or find a source image**:
   - Minimum 512x512 pixels
   - Square format
   - PNG with transparent background works best
   - For math app, consider: 📐 symbol, Σ symbol, or matrix icon

2. **Use a PWA icon generator**:
   - Go to: https://www.pwabuilder.com/imageGenerator
   - Or: https://realfavicongenerator.net/
   - Upload your 512x512 image
   - Download the generated icon pack

3. **Add icons to your project**:
   ```bash
   mkdir icons
   # Copy the generated icons into the icons/ folder
   ```

### Option B: Use macOS Preview (DIY Method)

If you have a source image:

```bash
# Create icons directory
mkdir icons

# Use ImageMagick (install with: brew install imagemagick)
convert source.png -resize 72x72 icons/icon-72x72.png
convert source.png -resize 96x96 icons/icon-96x96.png
convert source.png -resize 128x128 icons/icon-128x128.png
convert source.png -resize 144x144 icons/icon-144x144.png
convert source.png -resize 152x152 icons/icon-152x152.png
convert source.png -resize 192x192 icons/icon-192x192.png
convert source.png -resize 384x384 icons/icon-384x384.png
convert source.png -resize 512x512 icons/icon-512x512.png
```

### Option C: Use Placeholder Icons (For Testing)

Create a simple colored square as a placeholder:

```bash
mkdir -p icons
# Create solid color icons for testing
for size in 72 96 128 144 152 192 384 512; do
  convert -size ${size}x${size} xc:#a855f7 icons/icon-${size}x${size}.png
done
```

## Step 2: Deploy to Render

Make sure your icons are included:

```bash
git add icons/ manifest.json service-worker.js index.html
git commit -m "Add PWA support for iPhone home screen"
git push origin main
```

Render will automatically redeploy.

## Step 3: Add to iPhone Home Screen

Once deployed:

1. **Open Safari** on your iPhone
2. **Visit your app URL**: `https://flash-flashcards.onrender.com`
3. **Tap the Share button** (square with arrow pointing up)
4. **Scroll down** and tap **"Add to Home Screen"**
5. **Edit the name** if you want (default is "Flash Cards")
6. **Tap "Add"**

The app icon will appear on your home screen!

## Step 4: Using the App

- **Tap the icon** to launch the app
- **Runs full-screen** without Safari's UI
- **Works offline** after first load (thanks to service worker)
- **Looks like a native app**

## Removing Authentication (Optional)

If you want to use this as a personal app without login, here's how:

### Option 1: Auto-login with a Fixed User (Recommended)

Modify `auth.js` to automatically log in:

```javascript
// Add this at the top of auth.js after Auth object is defined
window.addEventListener('DOMContentLoaded', async () => {
    // Try to auto-login with a default user
    const defaultUser = 'myuser'; // Change this to your username
    const defaultPass = 'mypass'; // Change this to your password

    // Check if already logged in
    const response = await fetch(`${Config.apiBaseURL}/api/auth/me`, {
        credentials: 'include'
    });

    if (!response.ok) {
        // Not logged in, auto-login
        await Auth.login(defaultUser, defaultPass);
    }
});
```

Then hide the auth modal by adding to `auth.css`:

```css
#authModal {
    display: none !important;
}
```

### Option 2: Remove Auth Completely

This requires more changes:

1. **Create a no-auth version of server.py**:
   - Remove all authentication endpoints
   - Remove session checks from API endpoints
   - Store all data globally (single user mode)

2. **Modify frontend files**:
   - Remove auth modal from `index.html`
   - Remove auth checks from `script.js`
   - Remove `auth.js` import

3. **Simplify for single-user**:
   - Database stores data without user_id
   - No login/logout buttons
   - Direct access to all features

This is more complex but makes the app simpler for personal use.

### Option 3: Keep Auth but Remember Login

Add this to make login persist longer:

In `server.py`, modify the session configuration:

```python
from datetime import timedelta

app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=365)

# In login endpoint, add:
session.permanent = True
```

This keeps you logged in for a year.

## PWA Features Now Available

✅ **Add to Home Screen** - Install like a native app
✅ **Offline Support** - Works without internet (after first load)
✅ **Full Screen** - No browser UI
✅ **App Icon** - Custom icon on home screen
✅ **Splash Screen** - Shows while loading (iOS 13+)
✅ **Status Bar** - Matches your app theme

## Troubleshooting

### Icon Not Showing
- Make sure icons are in the `/icons/` folder
- Icons must be PNG format
- Clear Safari cache: Settings → Safari → Clear History and Website Data
- Re-add to home screen

### App Not Working Offline
- Service worker requires HTTPS (works on Render)
- Visit the app online first to cache resources
- Check Console in Safari for service worker errors

### Auth Modal Still Shows
- Make sure changes are committed and pushed
- Clear Safari cache
- Force reload: Hold refresh button

### App Opens in Safari Instead
- Delete the home screen icon
- Clear Safari cache
- Re-add to home screen
- Make sure manifest.json is accessible at /manifest.json

## Testing PWA Locally

To test before deploying:

```bash
# Start your local server
./start.sh

# Visit in Safari on your iPhone:
# 1. Make sure your iPhone is on the same WiFi
# 2. Find your Mac's IP: System Settings → Network
# 3. Visit: http://YOUR_MAC_IP:8000
```

Note: Service worker requires HTTPS, so it won't work fully on local IP, but you can test the icon and layout.

## Customizing the PWA

### Change App Name
Edit `manifest.json`:
```json
{
  "name": "Your Custom Name",
  "short_name": "Short Name"
}
```

### Change Theme Color
Edit `manifest.json` and index.html:
```json
{
  "theme_color": "#your-color-hex"
}
```

### Change Background Color
Edit `manifest.json`:
```json
{
  "background_color": "#your-color-hex"
}
```

## Next Steps

1. ✅ Create your app icons
2. ✅ Push changes to GitHub
3. ✅ Wait for Render to deploy
4. ✅ Add to your iPhone home screen
5. ✅ Enjoy your flashcard app!

Optional:
- Consider removing auth for personal use
- Customize colors and branding
- Add more PWA features (push notifications, etc.)

## Resources

- [PWA Builder](https://www.pwabuilder.com/) - Test and improve your PWA
- [Apple PWA Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
- [Can I Use - Service Workers](https://caniuse.com/serviceworkers)

---

**Pro Tip**: Once installed on your home screen, the app will work offline and feel like a native iOS app. Perfect for studying on the go!
