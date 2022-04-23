import Head from "next/head";
import router from "next/router";

import Thumbnail from "../images/Thumbnail.svg";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | Book your Slingshot!</title>
        <meta name="description" content="Book the Slingshot experience!" />
        <meta
          property="og:description"
          content="Book the Slingshot experience"
        />
        <meta
          property="og:url"
          content={router.pathname}
        />
        <meta property="og:image" content={Thumbnail} />
      </Head>

      <div style={{ height: "68vh", display: "grid", placeContent: "center" }}>
        <h1 className="BigTitle">Coming soon!</h1>
        <p>
          Call us at 438-700-9091 or contact us via email at
          vroom2rental@gmail.com
        </p>
      </div>
    </>
  );
}
