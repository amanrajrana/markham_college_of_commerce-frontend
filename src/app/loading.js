import styles from "./style.module.css";

export default function Loading() {
  return (
    <section className={styles.preLoading}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
