import React from "react";
import styles from "./hero.module.css";
import { inter } from "@/app/fonts";
import MyButton from "../button/Button";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.heroText}>
          <span className={styles.heroSpan}>Arise!</span> <br /> Change the
          World
        </h1>
        <p className={inter.className}>
          Impacting futures one at a time through spiritual growth,
          <br /> sports, health and education.
        </p>
        <div className={[styles.buttonContainer, inter.className].join(" ")}>
          <MyButton type={"Primary"} title={"Donate Now"} />

          <MyButton type={"Secondary"} title={"Become a Mentor"} />
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {/* col 1 */}
        <div className={styles.cardsCol}>
          <div
            className={[styles.cardMed, styles.card].join(" ")}
            style={{ backgroundColor: "#043f2e" }}
          >
            <div className={styles.cardMedBody}></div>
            <div className={styles.cardMedFooter}></div>
          </div>
          <div
            className={[styles.cardSmall, styles.card].join(" ")}
            style={{ backgroundColor: "#222222" }}
          ></div>
        </div>
        {/* col 2 */}
        <div className={styles.cardsCol}>
          <div
            className={[styles.cardsLg, styles.card].join(" ")}
            style={{
              backgroundImage: "url(/sanitary.jpg)",
            }}
          >
            <div className={styles.overlay}>
              <span>Health and Sanitation</span> <br />
              <span>
                Providing sanitary pads to girls in Secondary Schools through
                patnerships
              </span>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className={styles.cardsCol}>
          <div
            className={[styles.cardsCenter, styles.card].join(" ")}
            style={{ backgroundColor: "#D1DCDA" }}
          ></div>
        </div>
        {/* col 4 */}
        <div className={styles.cardsCol}>
          <div
            className={[styles.cardsLg, styles.card].join(" ")}
            style={{
              backgroundImage: "url(/zinduka1.jpg)",
            }}
          >
            <div className={styles.overlay}>
              <span>Education</span> <br />
              <span>Sponsor education to the less fortunate in Kenya</span>
            </div>
          </div>
        </div>
        {/* col 5 */}
        <div className={styles.cardsCol}>
          <div
            className={[styles.cardMed, styles.card].join(" ")}
            style={{
              backgroundImage: "url(/hand.svg)",
              backgroundColor: "#C8F168",
              backgroundSize: "unset",
            }}
          ></div>
          <div
            className={[styles.cardSmall, styles.card].join(" ")}
            style={{ backgroundColor: "#043f2e" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
