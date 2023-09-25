import styles from "./Stat.module.css";
import imgUrlOne from "../../assets/icon-brand-recognition.svg";
import imgUrlTwo from "../../assets/icon-detailed-records.svg";
import imgUrlThree from "../../assets/icon-fully-customizable.svg";
const Stat = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.text}>
          <h1 className={styles["section-h1"]}> Advanced Statistics</h1>
          <p className={styles["section-p"]}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={styles.stat}>
          <div className={styles["stat-one"]}>
            {" "}
            <img src={imgUrlOne} className={styles.image} />
            <h1 className={styles["section-h2"]}> Brand Recognition</h1>
            <p className={styles["section-p"]}>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className={styles["stat-two"]}>
            <img src={imgUrlTwo} className={styles.image} />
            <h1 className={styles["section-h2"]}> Detailed Records</h1>
            <p className={styles["section-p"]}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className={styles["stat-three"]}>
            <img src={imgUrlThree} className={styles.image} />
            <h1 className={styles["section-h2"]}>Fully Customizable</h1>
            <p className={styles["section-p"]}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Stat };
