import Image from "next/image";

import SpeedIcon from "../../images/SpeedIcon.svg";
import HomeIcon from "../../images/HomeIcon.svg";
import CheckIcon from "../../images/CheckIcon.svg";
import styles from "./Home.module.scss";

export default function Features() {
  return (
    <section className={styles.Features}>
      <h1>What we offer</h1>
      <div className={styles.Grid}>
        <GridItem
          image={SpeedIcon}
          title="Slingshot bahay"
          text="Our Slingshot looks, sounds, and drives like nothing else on the road. Leave four wheels behind and make your mark on the open road.
"
        />
        <GridItem
          image={HomeIcon}
          title="Easy renting bahay"
          text="Our Slingshot looks, sounds, and drives like nothing else on the road. Leave four wheels behind and make your mark on the open road.

"
        />
        <GridItem
          image={CheckIcon}
          title="No special license required!"
          text="Our Slingshot looks, sounds, and drives like nothing else on the road. Leave four wheels behind and make your mark on the open road.
"
        />
      </div>
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
