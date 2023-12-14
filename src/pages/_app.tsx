import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import MSWProvider from '@/components/common/MSWProvider';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window === 'undefined') {
        (async () => {
          const { server } = await import('../mocks/node');
          server.listen({ onUnhandledRequest: 'bypass' });
        })();
      } else {
        (async () => {
          const { worker } = await import('../mocks/browser');
          worker.start({ onUnhandledRequest: 'bypass' });
        })();
      }
    }
  }, []);
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MSWProvider>
          <Component {...pageProps} />
        </MSWProvider>
      </React.Suspense>
    </RecoilRoot>
  );
}
