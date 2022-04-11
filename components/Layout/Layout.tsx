import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import styles from "./Layout.module.scss";
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.Container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
