import React from "react";
import styles from "./styles.module.css";

const ChangeSection = () => {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundImage: "url(/change.svg)" }}
    >
      <p>
        Join us and be part of a positive change in the world. <br />
        With over:
      </p>
    </section>
  );
};

export default ChangeSection;
