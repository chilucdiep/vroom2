import Head from "next/head";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Book the Slingshot experience!" />
        <meta
          property="og:description"
          content="Book the Slingshot experience!"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/chilucdiep/vroom2/main/public/Thumbnail.png"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
