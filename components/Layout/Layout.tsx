import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
