import Button from "../Button/Button";
import styles from "./CTA.module.css";

const CallToAction = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Boost your links today</h1>
          <br/>
          <Button size="circular">Get Started</Button>
        </div>
      </section>
    </>
  );
};

export { CallToAction };
