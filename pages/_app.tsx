import Head from "next/head";
import type { AppProps } from "next/app";

import Head from "next/head";

import { Layout } from "../components/Layout";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://www.vroom2.ca/public/Thumbnail.png"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
