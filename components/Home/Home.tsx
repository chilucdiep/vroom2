import Hero from "./Hero";

import styles from "./Home.module.scss";

export function Home() {
  return (
    <main className={styles.Home}>
      <Hero />
      <section>features</section>
      <section>reviews</section>
    </main>
  );
}
