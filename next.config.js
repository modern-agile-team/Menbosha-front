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
    domains: ['https://play-lh.googleusercontent.com/'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
