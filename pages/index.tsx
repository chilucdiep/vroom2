import Head from "next/head";

import { Home } from "../components/Home";
import Thumbnail from "../images/Thumbnail.svg";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | The Slingshot Experience</title>
        <meta name="description" content="Book the Slingshot experience!" />
        <meta
          property="og:description"
          content="Book the Slingshot experience"
        />
        <meta property="og:image" content={Thumbnail} />
      </Head>

      <Home />
    </>
  );
}
