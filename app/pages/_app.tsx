import React from 'react';
import type { AppProps } from 'next/app';
import Layout from 'app/components/layout';
import '../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
