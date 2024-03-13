/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  generateEtags: false,
  images: {
    loader: 'imgix', // 'imgix'에서 'default'로 변경
    path: '', // 이미지 최적화 비활성화
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'menbosha-s3.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ssl.pstatic.net',
        port: '',
        pathname: '/static/pwe/address/**',
      },
      {
        protocol: 'https',
        hostname: 'phinf.pstatic.net',
        port: '',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
