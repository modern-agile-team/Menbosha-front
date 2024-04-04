import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import MSWProvider from '@/components/common/MSWProvider';
import { SocketProvider } from '@/hooks/useSocket';
import Seo from '@/components/common/Seo';
import ScrollToTopButton from '@/components/common/scroll-to-top/ScrollToTopButton';
import localFont from 'next/font/local';
const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <RecoilRoot>
      <SocketProvider>
        <React.Suspense fallback={<div>Loading...</div>}>
          {isClient && (
            <MSWProvider>
              <main className={pretendard.className}>
                <Seo />
                <Component {...pageProps} />
                <ScrollToTopButton />
              </main>
            </MSWProvider>
          )}
        </React.Suspense>
      </SocketProvider>
    </RecoilRoot>
  );
}
