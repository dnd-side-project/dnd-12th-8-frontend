import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
