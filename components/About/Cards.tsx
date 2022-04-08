import Image from "next/image";

import Img from "../../images/Img.png";
import styles from "../About/About.module.scss";

export default function Cards() {
  return (
    <section className={styles.Cards}>
      <Card
        title="EASY TO RIDE"
        text="Automatic transmissions are available for those who don’t want to row their own gears."
      />
      <Card
        title="YOUR STYLE"
        text="Our fleet of Slingshots and up coming active lifestyle vehicles will be added shortly."
      />
    </section>
  );
}

interface CardProps {
  title: string;
  text: string;
  image?: HTMLImageElement;
}

function Card({ title, text, image }: CardProps) {
  return (
    <div className={styles.Card}>
      <Image src={Img} alt="Adventures" className={styles.Img} width={500} height="100%"  objectFit="cover" />
      <div className={styles.Text}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
