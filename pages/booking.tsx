import Head from "next/head";

import { About } from "../components/About";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Vroom 2 | Book your Slingshot!</title>
        <meta name="description" content="Book the Slingshot experience!" />
      </Head>
      <h1 className="BigTitle">Book that shit ho</h1>
    </div>
  );
}
