import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

// Wrap MyApp with appWithTranslation HOC manually to prevent conflict
export default appWithTranslation(MyApp);
