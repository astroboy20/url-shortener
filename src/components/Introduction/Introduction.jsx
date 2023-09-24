import Button from "../Button/Button";
import styles from "./Introduction.module.css";
import imgUrl from "../../assets/illustration-working.svg";
const Introduction = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.text}>
          <h1 className={styles["section-h1"]}>More than just shorter links</h1>
          <p className={styles["section-p"]}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button size="circular">Get Started</Button>
        </div>

        <div className={styles.image}>
          <img src={imgUrl} alt="img" width="100%" height="100%" />
        </div>
      </section>
    </>
  );
};

export { Introduction };
