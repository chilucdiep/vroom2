import Image from "next/image";
import Logo from "../../../images/Logo.svg";
import { Button } from "../../Button";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Image src={Logo} alt="Vroom2 Logo" width={130} />

      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/">Book online</a>
          </li>
        </ul>
      </div>

      <div className={styles.NavActions}>
        <ul>
          <li>FR</li>
          <li>
            <Button label="Book a Ride" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
