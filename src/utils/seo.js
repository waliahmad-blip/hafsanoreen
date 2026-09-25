/**
 * HAFFU STUDIO — SEO Utilities
 * Sitemap generator, schema builders
 */
const fs = require('fs');
const path = require('path');

function generateSitemap(baseUrl, pages) {
  const urls = pages.map(p => `  <url><loc>${baseUrl}${p.path}</loc><priority>${p.priority || '0.7'}</priority><changefreq>${p.changefreq || 'monthly'}</changefreq></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function buildLocalBusinessSchema(brand) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brand.name,
    telephone: brand.phone,
    address: { '@type': 'PostalAddress', addressLocality: brand.address.city, addressRegion: brand.address.region, addressCountry: brand.address.country },
    areaServed: brand.serviceAreas?.map(a => ({ '@type': 'City', name: a })) || []
  };
}

module.exports = { generateSitemap, buildLocalBusinessSchema };