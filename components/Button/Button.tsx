import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  light?: boolean;
  onClick?(): void;
}

export function Button({ label, light, onClick }: ButtonProps) {
  const classes = classNames(styles.Button, {
    [styles.light]: light,
  });

  return <button className={classes}>{label}</button>;
}
