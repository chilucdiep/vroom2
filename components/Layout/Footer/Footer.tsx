import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <h2>Footer</h2>
      <div className="links">
        <ul>
          <li>
            <h2>Explore</h2>
            <a href="/">ok</a>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Contact us</h2>
            <a href="/">ok</a>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Follow us</h2>
            <a href="/">ok</a>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Begin your adventure</h2>
            <a href="/">ok</a>
          </li>
        </ul>
      </div>
      <div className="copy">
        <p className="BigCaption">ok</p>
        <p className="BigCaption">ok</p>
      </div>
    </footer>
  );
}
