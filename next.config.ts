import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'images.unsplash.com',
      'img1.kakaocdn.net',
      's3.ap-northeast-2.amazonaws.com',
      'your-s3-bucket.s3.amazonaws.com',
    ],
  },

  /* svgr 설정 */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  /* 리다이렉션 설정 */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
