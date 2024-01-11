/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['menbosha-s3.s3.ap-northeast-2.amazonaws.com'],
    domains: ['lh3.googleusercontent.com'],
    domains: ['k.kakaocdn.net'],
    domains: ['ssl.pstatic.net'],
    domains: ['phinf.pstatic.net'],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
