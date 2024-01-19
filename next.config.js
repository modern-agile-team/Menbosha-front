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
  generateEtags: false,
  images: {
    loader: 'default', // 'imgix'에서 'default'로 변경
    path: '', // 이미지 최적화 비활성화
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'menbosha-s3.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ssl.pstatic.net',
        port: '',
        pathname: '/static/pwe/address/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phinf.pstatic.net',
        port: '',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
