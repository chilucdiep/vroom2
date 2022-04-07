import Link from "next/link";

import { URL } from "../../../utils/constants/url";
import { Button } from "../../Button";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <ul className={styles.Sections}>
          <li>
            <h2>Explore</h2>
            <Link href={URL.HOME}>
              <a>Home</a>
            </Link>
            <Link href={URL.ABOUT}>
              <a>About us</a>
            </Link>
            <Link href={URL.BOOK}>
              <a>Booking</a>
            </Link>
          </li>

          <li>
            <h2>Contact us</h2>
            <Link href="514-371-1272">
              <a>514-371-1272</a>
            </Link>
            <Link href="vroom2rental@gmail.com">
              <a>vroom2rental@gmail.com</a>
            </Link>
            <a>9am - 5pm everyday</a>
          </li>

          <li>
            <h2>Follow us</h2>
            <Link href="https://www.instagram.com/vroom2rental/">
              <a>Instagram</a>
            </Link>
            <Link href="https://www.instagram.com/vroom2rental/">
              <a>TikTok</a>
            </Link>
            <Link href="https://www.instagram.com/vroom2rental/">
              <a>Facebook</a>
            </Link>
          </li>
          <li>
            <h2>Begin your adventure</h2>
            <Button label="Book a Ride" route={URL.BOOK} light />
          </li>
        </ul>
        <div className={styles.Copy}>
          <p>
            Copyright © 2022 All rights reserved -{" "}
            <Link href={URL.HOME}>
              <a>
                <b>VROOM 2</b>
              </a>
            </Link>
          </p>
          <p>
            Website designed & built by{" "}
            <Link href="https://chilucdiep.com/">
              <a>
                <b>Chi-Luc Diep</b>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
