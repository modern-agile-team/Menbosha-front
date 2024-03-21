/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  //vercel환경 cors적용
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  //main으로 강제 리다이렉트, 쓸일 있으면 쓰기
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/main',
  //       permanent: true,
  //     },
  //   ];
  // },
  //강제 리다이렉트 실행
  rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.menbosha.kr',
          },
        ],
        destination: '//:path*',
      },
    ];
  },
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
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
