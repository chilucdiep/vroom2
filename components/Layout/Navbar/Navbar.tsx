import styles from './Navbar.module.scss'

export function Navbar() {
    return (
      <nav className={styles.Navbar}>
        <h1>Logo</h1>

        <div className={styles.NavLinks}>
        <ul>
          <li>
            <a
              href="https://github.com/chilucdiep/Spacestagram"
              target="_blank"
            >
              Code
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/file/dkV2MEJPPmGWdl1vvfaPs4/Spacestagram?node-id=0%3A1"
              target="_blank"
            >
              Design
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.NavActions}>
        <ul>
          <li>

              FR
          </li>
          <li>
            <button>book</button>
          </li>
        </ul>
      </div>
      </nav>
    );
  }
  