import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';

import axiosClient from '@/lib/axios';

import DismissableToast from '@/components/DismissableToast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DismissableToast />

      <SWRConfig
        value={{
          fetcher: (url) => axiosClient.get(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;