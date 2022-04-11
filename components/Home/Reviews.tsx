import Image from "next/image";

import { Ratings } from "../Ratings";

import Img from "../../images/Img.png";
import styles from "./Home.module.scss";

export default function Reviews() {
  return (
    <section className={styles.Reviews}>
      <h1>
        What the <span className="Gradient">hype</span> is all about
      </h1>
      <div className={styles.Cards}>
        <Card
          stars={5}
          name="Sandra Beaumont"
          review="Rented the Slingshot for our anniversary, safe to say my boyfriend loved it."
        />
        <Card
          stars={5}
          name="George El Khoury"
          review="We drove the car to Mont-Tremblant for a weekend getaway. Made the ride very fun and memorable."
        />
        <Card
          stars={3.2}
          name="Kevin Nguyen"
          review="We pushed our parents to rent the car. They really enjoyed their day with it. Very clean and very smooth rental experience."
        />
      </div>
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
        src={Img}
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
