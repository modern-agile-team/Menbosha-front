import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import MSWProvider from '@/components/common/MSWProvider';
import { SocketProvider } from '@/hooks/useSocket';
import {
  GlobalFont,
  GlobalStyle,
} from '@/components/common/globalStyled/styled';
import Seo from '@/components/common/Seo';
import ScrollToTopButton from '@/components/common/scroll-to-top/ScrollToTopButton';

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
              <GlobalFont />
              <GlobalStyle />
              <Seo />
              <Component {...pageProps} />
              <ScrollToTopButton />
            </MSWProvider>
          )}
        </React.Suspense>
      </SocketProvider>
    </RecoilRoot>
  );
}
