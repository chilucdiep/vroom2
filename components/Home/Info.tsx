import Image from "next/image";

import { Button } from "../Button";
import { URL } from "../../utils/constants/url";

import Img from "../../images/Img.png";
import styles from "./Home.module.scss";

export default function Info() {
  return (
    <section className={styles.Info}>
      <section className={styles.InfoContainer}>
        <Image src={Img} alt="Adventure" height={1000} width={800} />
        <div className={styles.Right}>
          <h1>Your adventure awaits!</h1>
          <p>
            Our Slingshot looks, sounds, and drives like nothing else on the
            road. Leave four wheels behind and make your mark on the open road.
            Our Slingshot looks, sounds, and drives like nothing else on the
            road. Leave four wheels behind and make your mark on the open road.
          </p>
          <Button label="Go for a ride" route={URL.BOOK} />
        </div>
      </section>
      <div className={styles.Backsplash}>
        <h1 className={styles.Slingshot}>Slingshot</h1>
        <h1 className={styles.Effect}>Effect</h1>
      </div>
    </section>
  );
}
