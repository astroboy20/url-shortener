import styles from "./Footer.module.css";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";
const Footer = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles["logo-left"]}>
          <h1 className={styles.logo}>Shortify</h1>
        </div>

        <div className={styles.features}>
          <h1 className={styles["section-h1"]}>Features</h1>
          <p className={styles["section-p"]}>Link</p>
          <p className={styles["section-p"]}>Shortening</p>
          <p className={styles["section-p"]}>Branded Links</p>
          <p className={styles["section-p"]}>Analytics</p>
        </div>

        <div className={styles.resources}>
          <h1 className={styles["section-h1"]}>Resources</h1>
          <p className={styles["section-p"]}>Blog</p>
          <p className={styles["section-p"]}>Developers</p>
          <p className={styles["section-p"]}>Support</p>
        </div>

        <div className={styles.company}>
          <h1 className={styles["section-h1"]}>Company</h1>
          <p className={styles["section-p"]}>About </p>
          <p className={styles["section-p"]}>Our Team </p>
          <p className={styles["section-p"]}>Careers</p>
          <p className={styles["section-p"]}>Contact</p>
        </div>

        <div className={styles.icons}>
          <img src={facebook} className={styles.image} />
          <img src={twitter} className={styles.image} />
          <img src={pinterest} className={styles.image} />
          <img src={instagram} className={styles.image} />
        </div>
      </section>
    </>
  );
};

export { Footer };
