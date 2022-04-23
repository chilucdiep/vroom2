import Head from "next/head";
import router from "next/router";

import { Home } from "../components/Home";
import Thumbnail from "../public/Thumbnail.png";

export default function HomePage() { console.log(Thumbnail)
  return (
    <>
      <Head>
        <title>Vroom 2 | The Slingshot Experience</title>
        <meta name="description" content="Book the Slingshot experience!" />
        <meta
          property="og:description"
          content="Book the Slingshot experience"
        />
        {/* <meta
          property="og:url"
          content={router.pathname}
        /> */}
        <meta property="og:image" content='https://www.vroom2.ca/public/Thumbnail.png' />
      </Head>

      <Home />
    </>
  );
}
