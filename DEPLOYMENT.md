# Deployment Guide

Complete guide for deploying the TradePulse AI platform to Vercel and Railway.

## 🚀 Quick Links

- **GitHub Repository**: https://github.com/sonyho2715/lee-meadows-saas
- **Vercel Production**: https://lee-meadows-saas-3mf5k9q8m-sony-hos-projects.vercel.app
- **Railway Project**: https://railway.com/project/2199400e-573a-4fbf-b375-16eb1a44e30c

## 📋 Prerequisites

Before deploying, ensure you have:
- [x] GitHub account with repository access
- [x] Vercel account (free tier works)
- [x] Railway account (free tier works)
- [x] Supabase project created (optional but recommended)
- [x] Environment variables ready

## 🌐 Vercel Deployment

### ✅ Status: DEPLOYED

**Production URL**: https://lee-meadows-saas-3mf5k9q8m-sony-hos-projects.vercel.app

### Automatic Deployment (Recommended)

Vercel automatically deploys from GitHub:

1. **Already Connected**: The GitHub repository is linked to Vercel
2. **Auto-Deploy**: Push to `main` branch triggers deployment
3. **Preview Branches**: All branches get preview URLs

### Manual Deployment via CLI

```bash
# Install Vercel CLI (if needed)
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Environment Variables for Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Vercel Configuration

Project is pre-configured with `vercel.json`:
- Framework: Next.js 15
- Node.js: 24.x
- Build Command: `next build`
- Output Directory: `.next`

### Custom Domain (Optional)

1. Go to Vercel Dashboard → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

## 🚂 Railway Deployment

### Status: INITIALIZED

**Project**: https://railway.com/project/2199400e-573a-4fbf-b375-16eb1a44e30c

### Deploy via CLI

```bash
# Install Railway CLI (if needed)
npm install -g @railway/cli

# Login
railway login

# Initialize project (already done)
railway init --name lee-meadows-saas

# Deploy
railway up

# Check status
railway status

# View logs
railway logs

# Open in browser
railway open
```

### Deploy via GitHub Integration

1. Go to Railway Dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `sonyho2715/lee-meadows-saas`
5. Configure environment variables
6. Deploy

### Environment Variables for Railway

Add these in Railway Dashboard → Variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Railway specific
PORT=3000
NODE_ENV=production
```

### Railway Configuration

Railway auto-detects Next.js projects:
- Build: `npm run build`
- Start: `npm run start`
- Port: 3000 (auto-assigned)

### Custom Domain on Railway

1. Go to Railway Dashboard → Settings
2. Add custom domain
3. Update DNS:
   ```
   CNAME record: your-domain.com → your-service.up.railway.app
   ```

## 📊 Deployment Comparison

| Feature | Vercel | Railway |
|---------|--------|---------|
| **Free Tier** | 100GB bandwidth/month | $5 credit/month |
| **Build Time** | Fast (edge network) | Fast |
| **Global CDN** | ✅ Yes | ✅ Yes |
| **Automatic SSL** | ✅ Yes | ✅ Yes |
| **Environment Variables** | ✅ Yes | ✅ Yes |
| **Preview Deployments** | ✅ Yes | ✅ Yes |
| **Custom Domains** | ✅ Free | ✅ Free |
| **Database Hosting** | ❌ No | ✅ Yes (Postgres) |
| **Best For** | Jamstack, SSR | Full-stack, Databases |

## 🔐 Environment Variables

### Required Variables

```env
# Supabase (Required for database features)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Optional but recommended
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### Optional Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# API Keys (if needed)
COINGECKO_API_KEY=your-api-key
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password

# Security
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=https://your-domain.com
```

## 🔄 Continuous Deployment

### Git Workflow

```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin main

# ✅ Vercel auto-deploys
# ✅ Railway auto-deploys (if configured)
```

### Branch Strategy

- `main` → Production (Vercel + Railway)
- `develop` → Staging (Preview URLs)
- `feature/*` → Development (Preview URLs)

## 📈 Monitoring & Analytics

### Vercel Analytics

Built-in analytics available at:
https://vercel.com/sony-hos-projects/lee-meadows-saas/analytics

Tracks:
- Page views
- Performance metrics
- Web Vitals
- Geographic distribution

### Railway Metrics

Available in Railway Dashboard:
- CPU usage
- Memory usage
- Network traffic
- Build times
- Deployment logs

### Custom Monitoring (Optional)

Consider adding:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Plausible**: Privacy-friendly analytics
- **Uptime Robot**: Uptime monitoring

## 🐛 Troubleshooting

### Build Failures

**Vercel**:
```bash
# View build logs
vercel inspect <deployment-url> --logs

# Redeploy
vercel redeploy <deployment-url>
```

**Railway**:
```bash
# View logs
railway logs

# Redeploy
railway up --detach
```

### Common Issues

#### 1. Environment Variables Not Working

**Solution**:
- Redeploy after adding variables
- Check variable names (case-sensitive)
- Restart deployment

#### 2. API Routes 404

**Solution**:
- Verify file structure: `app/api/route.ts`
- Check `next.config.js` configuration
- Clear build cache and redeploy

#### 3. Supabase Connection Errors

**Solution**:
- Verify environment variables are set
- Check Supabase project is active
- Verify API keys are correct
- Check RLS policies

#### 4. Slow Build Times

**Solution**:
- Enable caching in build settings
- Remove unused dependencies
- Optimize imports (tree shaking)
- Use dynamic imports for large components

### Debug Mode

Enable verbose logging:

**Vercel**:
```bash
vercel --debug
```

**Railway**:
```bash
railway logs --follow
```

## 🚀 Performance Optimization

### Vercel Edge Functions

Convert API routes to Edge Runtime:

```typescript
// app/api/example/route.ts
export const runtime = 'edge'

export async function GET() {
  // Edge function code
}
```

### Image Optimization

Already configured via Next.js:
- Automatic WebP conversion
- Lazy loading
- Responsive images
- CDN delivery

### Caching Strategy

```typescript
// app/api/crypto/route.ts
export const revalidate = 60 // Revalidate every 60 seconds
```

## 📦 Rollback Strategy

### Vercel Rollback

1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"

Via CLI:
```bash
vercel rollback
```

### Railway Rollback

1. Go to Railway Dashboard → Deployments
2. Select previous deployment
3. Click "Deploy"

### Git Rollback

```bash
# Revert last commit
git revert HEAD
git push

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force
```

## 🔒 Security Checklist

Deployment security checklist:

- [x] Environment variables not committed to Git
- [x] `.env.local` in `.gitignore`
- [x] HTTPS enabled (automatic)
- [x] API routes protected with authentication
- [x] Rate limiting configured
- [x] CORS properly configured
- [x] Content Security Policy set
- [x] Supabase RLS policies enabled
- [ ] Security headers configured
- [ ] DDoS protection enabled
- [ ] Regular dependency updates

## 📚 Additional Resources

### Vercel Documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)

### Railway Documentation
- [Getting Started](https://docs.railway.app/getting-started)
- [Environment Variables](https://docs.railway.app/develop/variables)
- [Custom Domains](https://docs.railway.app/deploy/exposing-your-app)

### Next.js Resources
- [Production Checklist](https://nextjs.org/docs/going-to-production)
- [Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Security](https://nextjs.org/docs/going-to-production#security)

## 🎯 Next Steps

After deployment:

1. ✅ Test all pages and features
2. ✅ Verify environment variables
3. ✅ Test API routes
4. ✅ Check Supabase connection
5. ✅ Test crypto price updates
6. ✅ Verify cookie consent works
7. ✅ Test legal pages load correctly
8. ✅ Check mobile responsiveness
9. ⏳ Set up custom domain
10. ⏳ Configure monitoring
11. ⏳ Set up email notifications
12. ⏳ Enable analytics

## 📞 Support

If you encounter deployment issues:

**Vercel Support**:
- [Status Page](https://www.vercel-status.com/)
- [Community Forum](https://github.com/vercel/vercel/discussions)
- [Discord](https://discord.gg/vercel)

**Railway Support**:
- [Status Page](https://status.railway.app/)
- [Community](https://help.railway.app/)
- [Discord](https://discord.gg/railway)

---

**Last Updated**: October 30, 2025
**Version**: 1.0.0
**Status**: ✅ Successfully Deployed to Vercel, Railway Initialized
