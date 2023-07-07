import "@/app/globals.css";
import Footer from "@/components/student/Footer";
import Header from "@/components/student/Header";
import styles from "./styles.module.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className={`${styles.main} relative`}>
        <div className="z-10 relative">{children}</div>
      </main>
      <Footer />
    </>
  );
}
