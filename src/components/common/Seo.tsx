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
        content="1810c6859d6c323ba31e4d6edc2b1b7caa58dc91"
      />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"></meta>
    </Head>
  );
}
