import styles from "../About/About.module.scss";

export default function Hero() {
  return (
    <section className={styles.Hero}>
      <h3>Vroom2 isn’t just any ordinary car rental company</h3>
      <h1 className="BigTitle">
        WE ARE AN <span className="Gradient">ACTIVE LIFESTYLE</span> VEHICLE
        RENTAL COMPANY
      </h1>
      <p>
        Our mission is to provide an unique and exhilarating experience to our
        customers. Our vehicles with will make your journey more exciting than
        your destination.
      </p>
    </section>
  );
}
