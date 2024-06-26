import type { AppProps } from 'next/app';
import Head from 'next/head';

import './base.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
