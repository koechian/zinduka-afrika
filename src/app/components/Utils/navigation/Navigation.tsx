import React from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.blur}></div>
      <a className={styles.links} href="#hero">
        Home
      </a>
      <a className={styles.links} href="">
        About
      </a>
      <a className={styles.links} href="">
        Gallery
      </a>
      <a className={styles.links} href="#faq">
        FAQ's
      </a>
    </nav>
  );
};
export default Navigation;
