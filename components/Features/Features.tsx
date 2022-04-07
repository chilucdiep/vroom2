import Image from "next/image";

import SpeedIcon from "../../images/SpeedIcon.svg";
import HomeIcon from "../../images/HomeIcon.svg";
import CheckIcon from "../../images/CheckIcon.svg";
import styles from "./Features.module.scss";

export function Features() {
  return (
    <section className={styles.Features}>
      <h1>What we offer</h1>
      <div className={styles.Grid}>
        <GridItem
          icon={SpeedIcon}
          iconWidth={35}
          title="Slingshot bahay"
          text="Our Slingshot looks, sounds, and drives like nothing else on the road. Leave four wheels behind and make your mark on the open road.
"
        />
        <GridItem
          icon={HomeIcon}
          title="Easy renting bahay"
          text="Our Slingshot looks, sounds, and drives like nothing else on the road. Leave four wheels behind and make your mark on the open road.

"
        />
        <GridItem
          icon={CheckIcon}
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
  icon: HTMLImageElement;
  iconWidth?: number;
}

function GridItem({ text, title, icon, iconWidth = 25 }: GridItemProps) {
  return (
    <div className={styles.GridItem}>
      <div className={styles.Icon}>
        <Image src={icon} alt="Icon" width={iconWidth} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
