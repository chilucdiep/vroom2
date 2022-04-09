import Faq from "./Faq";
import Cards from "./Cards";
import { Features } from "../Features";
import Hero from "./Hero";

import styles from "../About/About.module.scss";

export function About() {
  return (
    <main className={styles.About}>
      <Hero />
      <Features />
      <Cards />
      <Faq />
    </main>
  );
}
