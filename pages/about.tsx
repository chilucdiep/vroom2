import Head from "next/head";

import { About } from "../components/About";

export default function AboutPage() {

  return (
    <div>
      <Head>
        <title>Vroom 2 | About Us</title>
      </Head>
      <About />
    </div>
  );
}
