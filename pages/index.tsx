import Head from "next/head";

import { Home } from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | The Slingshot Experience</title>
        <meta name="description" content="Book the Slingshot experience!" />
        <meta property="og:description" content="Book the Slingshot experience" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
      </Head>

      <Home />
    </>
  );
}
