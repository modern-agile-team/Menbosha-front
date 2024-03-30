import Head from 'next/head';

export default function Seo() {
  return (
    <Head>
      <link
        rel="icon"
        href="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/titleLogo.svg"
      />
      <title>멘보샤</title>
      <meta
        name="naver-site-verification"
        content="f70d229d3e38d57d3101592c57fb452c85668743"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://menbosha.kr/" />
      <meta property="og:title" content="멘보샤처럼 맛있게 우리의 멘토멘티" />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta
        property="og:description"
        content="멘보샤 처럼 맛있는 멘토와 멘티를 진행해 보세요. 누구나 멘토가 될 수 있고, 누구나 멘티가 될 수 있습니다.  "
      />
      <meta property="og:site_name" content="멘보샤" />
      <meta property="og:locale" content="ko_KR" />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
}
