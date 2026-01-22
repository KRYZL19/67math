# Vercel Deployment Guide - Fixing 404 Errors

## What Was Fixed

### 1. **tsconfig.json**
- Changed `"jsx": "react-jsx"` to `"jsx": "preserve"` 
- Next.js requires `preserve` mode to handle JSX transformation properly

### 2. **next.config.ts**
- Added `images.unoptimized: true` to handle static image optimization
- Added `typescript.ignoreBuildErrors: false` to ensure type safety
- Removed `output: 'standalone'` (only needed for Docker, not Vercel)

### 3. **vercel.json** (NEW)
- Created minimal Vercel configuration
- Explicitly sets framework to `nextjs` for proper detection

### 4. **.vercelignore** (NEW)
- Excludes unnecessary files from deployment
- Reduces deployment size and speed

## Common Causes of 404 Errors on Vercel

1. **Wrong Root Directory**
   - Vercel tries to deploy from wrong folder
   - **Solution**: In Vercel project settings → Set root directory to `./`

2. **Build Failures**
   - TypeScript errors or build issues
   - **Solution**: Run `npm run build` locally first to catch errors

3. **Missing Environment Variables**
   - If your app needs env vars in production
   - **Solution**: Add them in Vercel Dashboard → Settings → Environment Variables

4. **Incorrect Next.js Configuration**
   - Wrong `output` mode or missing configs
   - **Solution**: Use our updated `next.config.ts`

5. **File Case Sensitivity**
   - Windows is case-insensitive, Linux/Vercel is case-sensitive
   - **Solution**: Ensure file imports match exact file names (e.g., `Page.tsx` vs `page.tsx`)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Verifying Your Deployment

1. **Check Build Logs**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click on the deployment
   - Check "Building" logs for errors

2. **Check Function Logs**
   - If using API routes or server components
   - Check runtime logs for errors

3. **Test Locally First**
   ```bash
   npm run build
   npm start
   ```
   - Visit http://localhost:3000
   - Test all routes

## Troubleshooting

### Still Getting 404?

1. **Check Vercel Project Settings:**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node.js Version: `18.x` or `20.x`

2. **Clear Build Cache:**
   - In Vercel Dashboard → Settings → Clear Cache
   - Redeploy

3. **Check for Dynamic Routes:**
   - Ensure all `page.tsx` files are in correct folders
   - Check for typos in folder names

4. **Review Build Output:**
   ```
   Route (app)
   ┌ ○ /
   ├ ○ /Extremwertaufgaben
   ├ ○ /Parabeln
   ├ ○ /PDF
   └ ○ /Umformen
   ```
   All your routes should be listed here

## Environment-Specific Issues

### Development Works, Production Doesn't

- Check for hardcoded `localhost` URLs
- Verify all images are in `public/` folder
- Check browser console for errors
- Review Vercel function logs

### Images Not Loading

- Ensure images are in `public/` folder
- Use relative paths: `/image.png` not `./image.png`
- For GIFs, use `unoptimized` prop on Image component

## Support

If issues persist:
1. Check Vercel status: https://www.vercel-status.com/
2. Review logs in Vercel Dashboard
3. Run `npm run build` locally and compare output
4. Check browser console for client-side errors

## Verification Checklist

- [ ] `npm run build` succeeds locally
- [ ] `npm start` works after build
- [ ] All routes accessible at http://localhost:3000
- [ ] Images load correctly
- [ ] No TypeScript errors
- [ ] Git repository pushed to remote
- [ ] Vercel project connected to correct repo
- [ ] Build logs show successful deployment
- [ ] All routes return 200 status codes
