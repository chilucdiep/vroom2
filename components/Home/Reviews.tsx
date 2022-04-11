import Image from "next/image";

import Img from "../../images/Img.png";
import StarFilledIcon from "../../images/StarFilledIcon.svg";
import styles from "./Home.module.scss";

export default function Reviews() {
  return (
    <section className={styles.Reviews}>
      <h1>
        What the <span className="Gradient">hype</span> is all about
      </h1>
      <div className={styles.Cards}>
        <Card
          name="Sandra Beaumont"
          review="Rented the Slingshot for our anniversary, safe to say my boyfriend loved it."
        />
        <Card
          name="George El Khoury"
          review="We drove the car to Mont-Tremblant for a weekend getaway. Made the ride very fun and memorable."
        />
        <Card
          name="Kevin Nguyen"
          review="We pushed our parents to rent the car. They really enjoyed their day with it. Very clean and very smooth rental experience."
        />
      </div>
    </section>
  );
}

interface CardProps {
  name: string;
  review: string;
  image?: HTMLImageElement;
}

function Card({ name, review, image }: CardProps) {
  return (
    <div className={styles.Card}>
      <div className={styles.Ratings}>
        <Image src={StarFilledIcon} alt="Star" height={18} />
        <Image src={StarFilledIcon} alt="Star" height={18} />
        <Image src={StarFilledIcon} alt="Star" height={18} />
        <Image src={StarFilledIcon} alt="Star" height={18} />
        <Image src={StarFilledIcon} alt="Star" height={18} />
      </div>
      <Image
        src={Img}
        alt="Adventures"
        className={styles.Img}
        width={70}
        height={70}
        objectFit="cover"
      />
      <div className={styles.Text}>
        <h3>{name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
}
