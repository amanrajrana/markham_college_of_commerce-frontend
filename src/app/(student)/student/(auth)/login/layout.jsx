import "@/app/globals.css";
import styles from "./styles.module.css";

export default function RootLayout({ children }) {
  return (
    <div className={`${styles.main} relative`}>
      <div className="z-10 relative">{children}</div>
    </div>
  );
}
