import Link from "next/link";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  light?: boolean;
  secondary?: boolean;
  route: string;
}

export function Button({ label, light, secondary, route }: ButtonProps) {
  const classes = classNames(styles.Button, {
    [styles.light]: light,
    [styles.secondary]: secondary,
  });

  return (
    <Link href={route} passHref>
      <button className={classes}>{label}</button>
    </Link>
  );
}
