import Head from "next/head";

import { Home } from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | The Slingshot Experience</title>
      </Head>

      <Home />
    </>
  );
}
