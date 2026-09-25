import { PRODUCTS } from '@/lib/products';

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://hafsanoreen.com';
  const routes = [
    '', '/about', '/story', '/weddings', '/families', '/maternity', '/events',
    '/booking', '/portfolio', '/packages', '/reviews', '/faq', '/contact',
    '/service-areas', '/oakville-photographer', '/burlington-photographer',
    '/halton-photographer', '/milton-photographer', '/toronto-photographer',
    '/client-portal', '/privacy', '/terms', '/shop',
  ];
  const productRoutes = PRODUCTS.map((p) => `/shop/${p.slug}`);
  return [...routes, ...productRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : r.startsWith('/shop') ? 0.8 : 0.7,
  }));
}
