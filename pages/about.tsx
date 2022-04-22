import Head from "next/head";

import { About } from "../components/About";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Vroom 2 | About Us</title>
        <meta name="description" content="Book the Slingshot experience!" />
        <meta
          property="og:description"
          content="Book the Slingshot experience"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>
      <About />
    </div>
  );
}
