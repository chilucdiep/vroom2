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
          title="The Polaris Slingshot, flawless inside out!"
          text="Equipped with an AutoDrive automatic transmission available, giving everyone the opportunity to step in and stand out."
        />
        <GridItem
          icon={HomeIcon}
          title="Easy online rental with delivery option"
          text="Rent directly on our website and let us know if you want us to deliver the vehicle to a specific location. *Conditions applies."
        />
        <GridItem
          icon={CheckIcon}
          title="No special license required"
          text="To pilot a Slingshot, you need nothing more then a valid Class 5 driver's license or equivalent (G for Ontario)."
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
