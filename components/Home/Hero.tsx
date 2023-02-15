import Image from "next/image";

import { URL } from "../../utils/constants/url";
import { Button } from "../Button";

import HeroImage from "../../images/HeroImage.svg";
import styles from "./Home.module.scss";
import { Ratings } from "../Ratings";
import { motion } from "framer-motion";

export default function Hero() {
  const textVariant = {
    hidden: { x: -140, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const imgVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  return (
    <section className={styles.Hero}>
      <section className={styles.HeroContent}>
        <motion.div
          className={styles.Left}
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="BigTitle">
            EXPERIENCE THE RUSH, SPEED & POWER OF THE{" "}
            <span className="Gradient">SLINGSHOT</span>
          </h1>
          <p className="BigCaption">
            Our Slingshot looks, sounds, and drives like nothing else on the
            road. Leave four wheels behind and make your mark on the open road.
          </p>
          <div className={styles.Actions}>
            <Button label="Go for a ride" route={URL.BOOK} />
            <Button label="Learn more" route={URL.ABOUT} secondary />
          </div>
        </motion.div>
        <motion.div
          className={styles.Image}
          variants={imgVariant}
          initial="hidden"
          animate="visible"
        >
          <Image src={HeroImage} alt="Slingshot" height={750} />
        </motion.div>
      </section>
      <section className={styles.SocialProof}>
        <Reviews
          stars={4.2}
          name="Jonathan Papadakos"
          review="We had a great ride with the car! Awesome experience thanks!"
        />
        <Reviews
          stars={5}
          name="Marie-Ève Landry"
          review="Great service! My husband really loved the car and the experience."
        />
        <Reviews
          stars={5}
          name="Raj Tulit"
          review="100% would recommend! Very easy to rent the vehicle and the whole
          process was smooth."
        />
      </section>
    </section>
  );
}

interface ReviewsProps {
  stars: number;
  name: string;
  review: string;
}

function Reviews({ stars, name, review }: ReviewsProps) {
  const reviewsVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div variants={reviewsVariant} initial="hidden" animate="visible">
      <Ratings stars={stars} />
      <h3>{name}</h3>
      <p>{review}</p>
    </motion.div>
  );
}
