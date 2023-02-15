import Head from "next/head";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import "../styles/globals.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let copies: any = [];

  useEffect(() => {
    Router.events.on("beforeHistoryChange", onLoad);
    return () => {
      Router.events.off("beforeHistoryChange", onLoad);
    };
  }, []);

  const onLoad = () => {
    // Create a clone of every <style> and <link> that currently affects the page. It doesn't matter
    // if Next.js is going to remove them or not since we are going to remove the copies ourselves
    // later on when the transition finishes.
    const nodes = document.querySelectorAll(
      "link[rel=stylesheet], style:not([media=x])"
    );
    copies = Array.from(nodes).map((el) => el.cloneNode(true));

    for (let copy of copies) {
      // Remove Next.js' data attributes so the copies are not removed from the DOM in the route
      // change process.
      copy.removeAttribute("data-n-p");
      copy.removeAttribute("data-n-href");

      // Add duplicated nodes to the DOM.
      document.head.appendChild(copy);
    }
  };

  const onExit = () => {
    for (let copy of copies) {
      // Remove previous page's styles after the transition has finalized.
      document.head.removeChild(copy);
    }
  };

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

      <AnimatePresence mode="wait" onExitComplete={onExit}>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.4,
          }}
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
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
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
