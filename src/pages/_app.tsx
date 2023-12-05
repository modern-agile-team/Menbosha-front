import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background: #252525;
  display: flex;
  margin: -10px 0px -10px -10px;
  width: 100vw;
  height: 100vh;
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component {...pageProps} />
        </React.Suspense>
      </RecoilRoot>
    </PageWrapper>
  );
}
