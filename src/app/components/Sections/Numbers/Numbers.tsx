import React from "react";
import styles from "./styles.module.css";
import { boska, inter } from "@/app/fonts";

const Numbers = () => {
  return (
    <section className={styles.wrapper}>
      <div
        className={styles.contentWrapper}
        style={{ backgroundImage: "url(/numbers.webp" }}
      >
        <div className={styles.titleText}>
          <h1 style={{ fontSize: "4vw" }}>Z.A.F by the Numbers</h1>
          <p
            className={inter.className}
            style={{ fontSize: "1vw", color: "#D1DCDA", textAlign: "center" }}
          >
            Get involved and positively impact a young life through Zinduka
            Afrika
          </p>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "7vw", fontWeight: "bold" }}
            >
              900
            </div>
            <div className={styles.text}>
              <p className={inter.className}>
                Young lives impacted through scholarship and ministry
              </p>
            </div>
          </div>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "7vw", fontWeight: "bold" }}
            >
              60
            </div>
            <div className={styles.text}>
              <p className={inter.className}>
                Partnerships with local schools and institutions
              </p>
            </div>
          </div>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "7vw", fontWeight: "bold" }}
            >
              88
            </div>
            <div className={styles.text}>
              <p className={inter.className}>
                Scholarships awarded this year alone
              </p>
            </div>
          </div>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "7vw", fontWeight: "bold" }}
            >
              12
            </div>
            <div className={styles.text}>
              <p className={inter.className}>
                Outreach missions to new locations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
