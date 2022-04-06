import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from './Layout.module.scss'

export function Layout({ children }: any) {
  return (
    <div className={styles.Container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
