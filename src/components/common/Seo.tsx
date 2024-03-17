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
    </Head>
  );
}
