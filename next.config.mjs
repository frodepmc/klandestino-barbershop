/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración para GitHub Pages
  basePath: '/klandestino-barbershop',
  assetPrefix: '/klandestino-barbershop',
};

export default nextConfig;