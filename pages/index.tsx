import Head from "next/head";
import Image from "next/image";

import { Home } from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | Slingshot Rental</title>
        <meta name="description" content="Book the Slingshot experience!" />
      </Head>

      <Home />
    </>
  );
}
