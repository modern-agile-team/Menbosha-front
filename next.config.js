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
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
