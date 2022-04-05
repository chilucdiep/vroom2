import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h1>Logo</h1>

      <div className={styles.NavLinks}>
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              About us
            </a>
          </li>
          <li>
            <a href="/">
              Book online
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.NavActions}>
        <ul>
          <li>FR</li>
          <li>
            <button>book</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
