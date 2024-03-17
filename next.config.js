/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  //vercel환경 cors적용
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
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
  rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'www.menbosha.kr',
            },
          ],
          destination: 'https://menbosha.kr/:path*',
        },
      ],
    };
  },
  // //vercel환경에서 api요청 rewrites 현재는 안씀 사용하게 되면, 사용
  // async rewrites() {
  //   return [
  //     {
  //       source: `/auth/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/:path*`,
  //     },
  //     {
  //       source: `/chat/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}chat/:path*`,
  //     },
  //     {
  //       source: `/help-me-boards/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}help-me-boards/:path*`,
  //     },
  //     {
  //       source: `/help-you-comments/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}help-you-comments/:path*`,
  //     },
  //     {
  //       source: `/mentors/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}mentors/:path*`,
  //     },
  //     {
  //       source: `/mentor-boards/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}mentor-boards/:path*`,
  //     },
  //     {
  //       source: `/report/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}report/:path*`,
  //     },
  //     {
  //       source: `/user/:path*`,
  //       destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}user/:path*`,
  //     },
  //   ];
  // },
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
