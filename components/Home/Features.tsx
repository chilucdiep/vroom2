import Image from "next/image";

import HomeIcon from "../../images/HomeIcon.svg";
import styles from "./Home.module.scss";

export default function Features() {
  return (
    <section>
      <h1>What we offer</h1>
      <div></div>
    </section>
  );
}

interface GridItemProps {
  title: string;
  text: string;
  image: HTMLImageElement;
}

function GridItem({ text, title, image }: GridItemProps) {
  return (
    <div className={styles.GridItem}>
      <div className={styles.Icon}>
        <Image src={image} alt="Icon" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
