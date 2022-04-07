import Features from "./Features";
import Hero from "./Hero";

import styles from "./Home.module.scss";

export function Home() {
  return (
    <main className={styles.Home}>
      <Hero />
      <Features />
      <section>reviews</section>
    </main>
  );
}
