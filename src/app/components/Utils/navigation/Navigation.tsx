import React from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.links} href="">
        Home
      </a>
      <a className={styles.links} href="">
        About
      </a>
      <a className={styles.links} href="">
        Gallery
      </a>
      <a className={styles.links} href="">
        FAQ's
      </a>
    </nav>
  );
};
export default Navigation;