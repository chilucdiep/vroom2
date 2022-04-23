import Head from "next/head";

import { About } from "../components/About";
import Thumbnail from "../images/Thumbnail.svg";

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
          property="og:url"
          content={window.location.pathname + window.location.search}
        />
        <meta property="og:image" content={Thumbnail} />
      </Head>
      <About />
    </div>
  );
}
