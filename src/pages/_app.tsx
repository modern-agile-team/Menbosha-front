import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import MSWProvider from '@/components/common/MSWProvider';

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        {isClient && (
          <MSWProvider>
            <Component {...pageProps} />
          </MSWProvider>
        )}
      </React.Suspense>
    </RecoilRoot>
  );
}
