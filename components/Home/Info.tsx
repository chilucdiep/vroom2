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
            Drive with style and drive with confidence: With exterior
            refinements that make a new look from every angle, it is easy to make
            a statement.
            <br />
            <br />
            Drivers and passengers get a front-row seat to every twist and turn.
            With a low center of gravity, open cockpit, and one rear wheel
            launching you forward, the Slingshot is built to turn the open road
            into your greatest adventure yet.
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
