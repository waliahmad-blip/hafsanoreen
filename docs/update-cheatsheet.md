# How to Update Your Website in 5 Minutes

## Update Gallery Images
1. Log into Pixieset (or your hosting dashboard)
2. Upload new photos to the correct gallery folder
3. HAFFU can draft captions and SEO titles — approve with one tap
4. Images auto-optimize to WebP and lazy-load

## Change Pricing
Edit `src/utils/constants.js` — update the PACKAGES object:
```js
portrait: { name: 'The Portrait', price: 500, hours: 1.5, frames: 25 }
```
Redeploy backend. Frontend will auto-reflect changes.

## Add a Blog Post
1. Create new HTML file in `public/` (copy template from any page)
2. HAFFU can draft the content — approve and publish
3. Add to sitemap via `scripts/generate-sitemap.js`

## Toggle Recovery Mode
```bash
curl -X POST https://your-api.com/api/admin/recovery-mode \
  -H "x-api-key: YOUR_KEY" \
  -d '{"active": true}'
```

## Quick Wins
- Instagram link-in-bio always points to `/booking`
- Google Review link: deep-link from post-delivery email
- Seasonal pop-ups: create a page and share the link