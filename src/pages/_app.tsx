import type { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "../styles/global.style";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>도와줘개발</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
