import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { URL } from "../../../utils/constants/url";
import { Button } from "../../Button";

import Logo from "../../../images/Logo.svg";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const router = useRouter();
  console.log(router.pathname);

  const HomeClasses = classNames({
    [styles.bold]: router.pathname === "/",
  });

  const AboutClasses = classNames({
    [styles.bold]: router.pathname === "/about",
  });

  const BookingClasses = classNames({
    [styles.bold]: router.pathname === "/booking",
  });

  return (
    <nav className={styles.Navbar}>
      <Link href={URL.HOME} passHref>
        <Image src={Logo} alt="Vroom2 Logo" width={130} />
      </Link>

      <div>
        <ul>
          <li>
            <Link href={URL.HOME}>
              <a className={HomeClasses}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={URL.ABOUT}>
              <a className={AboutClasses}>About us</a>
            </Link>
          </li>
          <li>
            <Link href={URL.BOOK}>
              <a className={BookingClasses}>Booking</a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a>FR</a>
          </li>
          <li>
            <Button label="Book a Ride" route={URL.BOOK} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
