/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: all 42 routes are static (R3F scenes are client-side),
  // so the built site in web/out is served directly by the Express API server.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
