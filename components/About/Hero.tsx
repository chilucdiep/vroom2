import { motion } from "framer-motion";
import Image from "next/image";

import Logo from "../../public/favicon.ico";
import styles from "../About/About.module.scss";

export default function Hero() {
  const textVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.09,
      transition: {
        delay: 0.5,
        duration: 1.5,
        loop: true,
      },
    },
  };

  return (
    <section className={styles.Hero}>
      <motion.div
        className={styles.BackSplash}
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        <Image src={Logo} alt="BackSplash" />
      </motion.div>
      <h3>Vroom2 isn’t just any ordinary car rental company</h3>
      <h1 className="BigTitle">
        WE ARE AN EXCLUSIVE EXPERIENCE{" "}
        <span className="Gradient">ACTIVE LIFESTYLE</span> VEHICLE COMPANY
      </h1>
      <p>
        Our mission is to provide an unique and exhilarating experience to our
        customers. Our vehicles with will make your journey more exciting than
        your destination.
      </p>
    </section>
  );
}
