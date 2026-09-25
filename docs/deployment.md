# HAFFU STUDIO — Deployment Guide

## Frontend (Static)
Deploy `public/` to any static host:

### Vercel (Recommended)
```bash
npm i -g vercel
cd public
vercel --prod
```
The `vercel.json` at project root handles API rewrites.

### Cloudflare Pages / Netlify
Connect the repo and set build directory to `public/`.

## Backend (Node.js API)

### Google Cloud Run (Recommended — same project as Vertex AI)
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/haffu-api
gcloud run deploy haffu-api --image gcr.io/PROJECT_ID/haffu-api --platform managed --region us-central1 --allow-unauthenticated
```

### Environment Variables
Copy `.env.example` to `.env` and fill in all values before deploying.
Required: `VERTEX_AI_PROJECT_ID`, `VERTEX_AI_LOCATION`, `FIREBASE_PROJECT_ID`, `STRIPE_SECRET_KEY`

## DNS & Domain
Point `hafsanoreen.com` to your hosting provider:
- Static site: Vercel/Cloudflare custom domain
- API: Cloud Run mapped URL or custom domain

## Post-Deploy Checklist
- [ ] SSL certificate active
- [ ] `/api/health` returns 200
- [ ] Contact form submits successfully
- [ ] HAFFU chat widget loads and responds
- [ ] Google Analytics connected
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google