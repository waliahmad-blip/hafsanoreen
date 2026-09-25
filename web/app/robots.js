import { readFileSync } from 'node:fs';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://hafsanoreen.com/sitemap.xml',
    host: 'https://hafsanoreen.com',
  };
}
