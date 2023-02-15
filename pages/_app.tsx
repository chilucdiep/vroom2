import Head from "next/head";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import "../styles/globals.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          // transition={{
          //   duration: 0.1,
          // }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              transition: { duration: 0.5 },
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
