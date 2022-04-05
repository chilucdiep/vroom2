import Head from "next/head";
import Image from "next/image";

import { Home } from "../components/Home";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vroom 2 | Slingshot Rental</title>
        <meta name="description" content="Book the Slingshot experience!" />
      </Head>

      <Home />
    </div>
  );
}
