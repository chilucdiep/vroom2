import { Features } from "../Features";
import Hero from "./Hero";

import styles from "../About/About.module.scss";

export function About() {
  return (
    <main className={styles.About}>
      <Hero />
      <Features />
    </main>
  );
}
