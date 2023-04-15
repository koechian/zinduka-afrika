import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  const spans: any = [];
  for (let index = 0; index < 20; index++) {
    spans[index] = "arise, change the world * * ";
  }

  return (
    <div className={styles.container}>
      <div className={[styles.topBanner, styles.banner].join(" ")}>
        {spans.map((span: string) => (
          <span> {span}</span>
        ))}
      </div>
      <div className={[styles.bottomBanner, styles.banner].join(" ")}>
        <span>the world * *</span>
        {spans.map((span: string) => (
          <span> {span}</span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
