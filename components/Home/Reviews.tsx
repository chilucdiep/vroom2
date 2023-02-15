import Image from "next/image";

import { Ratings } from "../Ratings";

import SandraImg from "../../images/SandraImg.svg";
import KevinImg from "../../images/KevinImg.svg";
import GeorgeImg from "../../images/GeorgeImg.svg";
import styles from "./Home.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
    if (!isInView) {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className={styles.Reviews}>
      <h1>
        What the <span className="Gradient">hype</span> is all about
      </h1>
      <motion.div
        className={styles.Cards}
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div variants={item}>
          <Card
            stars={5}
            name="Sandra Beaumont"
            review="Rented the Slingshot for our anniversary, safe to say my boyfriend loved it."
            image={SandraImg}
          />
        </motion.div>
        <motion.div variants={item}>
          <Card
            stars={5}
            name="George El Khoury"
            review="We drove the car to Mont-Tremblant for a weekend getaway. Made the ride very fun and memorable."
            image={GeorgeImg}
          />
        </motion.div>
        <motion.div variants={item}>
          <Card
            stars={4.2}
            name="Kevin Nguyen"
            review="We pushed our parents to rent the car. They really enjoyed their day with it. Very clean and very smooth rental experience."
            image={KevinImg}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

interface CardProps {
  stars: number;
  name: string;
  review: string;
  image?: HTMLImageElement;
}

function Card({ stars, name, review, image }: CardProps) {
  return (
    <div className={styles.Card}>
      <Ratings stars={stars} />
      <Image
        src={image!}
        alt="Reviewer"
        className={styles.Img}
        width={70}
        height={70}
      />
      <div className={styles.Text}>
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
}
