import Image from "next/image";

import { URL } from "../../utils/constants/url";
import { Button } from "../Button";

import HeroImage from "../../images/HeroImage.svg";
import styles from "./Home.module.scss";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <section className={styles.HeroContent}>
        <div className={styles.Left}>
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
        </div>
        <div className={styles.Image}>
          <Image src={HeroImage} alt="Slingshot" height={800} />
        </div>
      </section>
      <section className={styles.SocialProof}>
        <div>
          <h3>Jonathan Papadakos</h3>
          <p>
            We had a great ride with the car! We rented the helmets as well and
            they were very comfortable.
          </p>
        </div>
        <div>
          <h3>Jonathan Papadakos</h3>
          <p>
            We had a great ride with the car! We rented the helmets as well and
            they were very comfortable.
          </p>
        </div>
        <div>
          <h3>Jonathan Papadakos</h3>
          <p>
            We had a great ride with the car! We rented the helmets as well and
            they were very comfortable.
          </p>
        </div>
      </section>
    </section>
  );
}
