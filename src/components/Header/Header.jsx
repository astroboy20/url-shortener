import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import imgUrl from "../../assets/logo.svg"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    console.log("it is working");
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles["left-side"]}>
          <img src={imgUrl} /> 
          <ul className={styles.list}>
            <p className={styles["list-p"]}>Feature</p>
            <p className={styles["list-p"]}>Pricing</p>
            <p className={styles["list-p"]}>Resources</p>
          </ul>
        </div>

        <div className={styles["right-side"]}>
          <p className={styles["list-p"]}>Login</p>
          <Button size="circular" onClick={handleClick}>
            Sign Up
          </Button>
        </div>
        <div onClick={handleHamburger} className={styles.hamburger}>
          {isOpen ? <>&#10005;</> : <>&#8801;</>}
        </div>
      </header>

      {isOpen && (
        <div className={styles.hamburgerList}>
          <p>Feature</p>
          <p>Pricing</p>
          <p>Resources</p>

          <hr />
          <p>Login</p>
          <Button size="circular" onClick={handleClick}>
            Sign Up
          </Button>
        </div>
      )}
    </>
  );
};

export { Header };
