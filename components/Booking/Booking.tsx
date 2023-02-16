import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../Button";
import styles from "./Booking.module.scss";

export function Booking() {
  const [isWeekend, setIsWeekday] = useState(true);

  const WeekdayClasses = isWeekend
    ? `${styles.Selected} ${styles.FilterButton}`
    : styles.FilterButton;

  const WeekendClasses = !isWeekend
    ? `${styles.Selected} ${styles.FilterButton}`
    : styles.FilterButton;

  const toggleMarkup = (
    <div className={styles.Toggle}>
      <button className={WeekdayClasses} onClick={() => setIsWeekday(true)}>
        Rent on a <strong>Weekday</strong>
      </button>
      <button className={WeekendClasses} onClick={() => setIsWeekday(false)}>
        Rent on a <strong>Weekend</strong>
      </button>
    </div>
  );

  const pricingMarkup = isWeekend ? <WeekdayCards /> : <WeekendCards />;

  return (
    <section className={styles.Booking}>
      {toggleMarkup}
      {pricingMarkup}
    </section>
  );
}

interface PricingCardProps {
  preferred?: boolean;
  weekend?: boolean;
}

function PricingCard({ preferred = false, weekend = false }: PricingCardProps) {
  const subtitle = preferred ? "For a 3 days or more" : "For a single day";
  let price: string;

  if (weekend) {
    price = preferred ? "270$" : "300$";
  } else {
    price = preferred ? "250$" : "270$";
  }

  const cardVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className={`${styles.PricingCard} ${preferred && styles.Preferred}`}
      variants={cardVariant}
      initial="hidden"
      animate="visible"
    >
      <h4>{subtitle}</h4>
      <div className={styles.Price}>
        <p>
          <span className={preferred ? "Gradient" : ""}>{price}</span>/ day
        </p>
      </div>
      <div className={styles.Details}>
        <p>- Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
        <p>- Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
        <p>- Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
        <p>- Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
      </div>
      <Button label="Contact Us" route="vroom2rental@gmail.com" />
    </motion.div>
  );
}

function WeekdayCards() {
  return (
    <section className={styles.Cards}>
      <PricingCard />
      <PricingCard preferred />
    </section>
  );
}

function WeekendCards() {
  return (
    <section>
      <section className={styles.Cards}>
        <PricingCard weekend />
        <PricingCard preferred weekend />
      </section>
    </section>
  );
}
