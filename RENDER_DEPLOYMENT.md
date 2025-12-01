# Deploying Flash Flashcards to Render

This guide walks you through deploying your Flash flashcard application to Render's free tier.

## Prerequisites

1. A [Render account](https://render.com) (sign up for free)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. All changes committed to your repository

## Important: Database Persistence

**Note about Render's Free Tier:**
- The free tier has a persistent disk feature that we've configured in `render.yaml`
- Your SQLite database will persist across deployments
- However, free tier services spin down after inactivity and may take 50+ seconds to restart

## Deployment Steps

### Option 1: Deploy Using render.yaml (Recommended)

1. **Push your code to GitHub** (or GitLab/Bitbucket):
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Connect to Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **"New +"** → **"Blueprint"**
   - Connect your Git repository
   - Render will automatically detect `render.yaml` and configure your service

3. **Review and Deploy**:
   - Review the configuration (service name, environment variables, etc.)
   - Click **"Apply"**
   - Render will start building and deploying your app

4. **Wait for deployment** (usually 2-5 minutes):
   - You can watch the build logs in real-time
   - Once complete, you'll see "Live" status

5. **Access your app**:
   - Your app URL will be: `https://flash-flashcards.onrender.com`
   - Click the URL to open your deployed application

### Option 2: Deploy Via Render Dashboard

If you prefer manual configuration:

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Create a new Web Service**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **"New +"** → **"Web Service"**
   - Connect your Git repository
   - Select your repository from the list

3. **Configure the service**:

   **Basic Settings:**
   - **Name**: `flash-flashcards` (or your preferred name)
   - **Region**: Choose closest to you
   - **Branch**: `main` (or your default branch)
   - **Runtime**: `Python 3`

   **Build & Deploy:**
   - **Build Command**:
     ```
     pip install -r requirements.txt && chmod +x build.sh && ./build.sh
     ```
   - **Start Command**:
     ```
     gunicorn server:app
     ```

4. **Add Environment Variables**:
   - Click **"Advanced"**
   - Add environment variable:
     - **Key**: `SECRET_KEY`
     - **Value**: Click "Generate" to auto-generate
   - Add another variable:
     - **Key**: `PYTHON_VERSION`
     - **Value**: `3.11.0`

5. **Add Persistent Disk** (Important for database):
   - Scroll to **"Disks"** section
   - Click **"Add Disk"**
   - **Name**: `flashcards-data`
   - **Mount Path**: `/opt/render/project/src/database`
   - **Size**: `1 GB` (free tier)

6. **Create Web Service**:
   - Click **"Create Web Service"**
   - Wait for deployment (2-5 minutes)

7. **Access your app**:
   - Once deployed, click the URL at the top of the page
   - Format: `https://your-service-name.onrender.com`

## After Deployment

### Test Your Application

1. Open your Render URL
2. Register a new account
3. Test creating and reviewing flashcards
4. Test bookmarking and hiding cards
5. Check the dashboard

### Update Your Application

To deploy updates:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Render will automatically detect the push and redeploy your application.

### Monitor Your Application

- **View Logs**: Go to your service → "Logs" tab
- **Monitor Performance**: "Metrics" tab shows CPU, memory usage
- **Check Status**: Service dashboard shows uptime and health

## Troubleshooting

### Service Won't Start

1. Check the build logs for errors
2. Verify all files are committed to Git
3. Ensure `requirements.txt` lists all dependencies
4. Check that `database/schema.sql` exists

### Database Issues

1. Verify the disk is properly mounted at `/opt/render/project/src/database`
2. Check logs for database initialization errors
3. The database persists across deploys, but a fresh deploy won't delete existing data

### CORS Errors

The server automatically detects the Render URL and configures CORS. If you see CORS errors:
1. Check the server logs for the detected RENDER_EXTERNAL_URL
2. Verify `config.js` is using `window.location.origin` in production

### 502 Bad Gateway

This usually happens when:
1. The service is starting up (wait 30-60 seconds)
2. Build command failed (check logs)
3. Port binding issue (should use `PORT` environment variable)

### Free Tier Limitations

- Service spins down after 15 minutes of inactivity
- First request after spin-down takes 50+ seconds to wake up
- 750 hours/month of usage (enough for most personal projects)
- Database limited to 1GB on free tier

## Upgrading Database (Optional)

For production use with multiple users, consider upgrading to PostgreSQL:

1. In Render Dashboard, create a new PostgreSQL database (free tier available)
2. Update `server.py` to use PostgreSQL instead of SQLite
3. Install psycopg2: `pip install psycopg2-binary`
4. Update connection string to use `DATABASE_URL` environment variable

## Custom Domain (Optional)

To use your own domain (laharvardflashcards.com):

1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain
4. Update your DNS records as instructed by Render
5. Render provides free SSL certificates automatically

## Cost Considerations

**Free Tier Includes:**
- 750 hours/month web service
- 1GB persistent disk
- Automatic SSL
- Continuous deployment

**To avoid charges:**
- Stay on free tier (no credit card required)
- Monitor your usage in the dashboard
- Service auto-sleeps after inactivity (no charges while sleeping)

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- Check logs first for most issues

---

## Quick Reference

**Service URL Format**: `https://your-service-name.onrender.com`

**Important Files**:
- `server.py` - Main Flask application
- `render.yaml` - Render configuration
- `build.sh` - Build script
- `requirements.txt` - Python dependencies
- `config.js` - Frontend API configuration

**Common Commands**:
```bash
# Push updates
git push origin main

# View local logs
tail -f /var/log/render.log  # (on Render service)

# Test locally
./start.sh
```

Good luck with your deployment!
