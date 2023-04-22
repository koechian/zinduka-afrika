import React from "react";
import styles from "./styles.module.css";
import MyButton from "../../Utils/button/Button";

const ChangeSection = () => {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundImage: "url(/change.svg)" }}
    >
      <div className={styles.container}>
        <div className={[styles.left, styles.imageContainers].join(" ")}>
          <div
            className={styles.imageLarge}
            style={{ backgroundImage: "url(/zinduka5.jpg)" }}
          ></div>
          <div
            className={styles.imageSmall}
            style={{
              backgroundImage: "url(/zinduka4.jpg)",
            }}
          ></div>
        </div>
        <div className={styles.center}>
          <p>
            Join us and be part of a positive change in the world. <br />
            With over:
          </p>
          <div>
            <span>129,355+</span>
          </div>
          <p>Other like minded mentors, donors, leaders, speakers & sponsors</p>
          <MyButton type={"Primary"} title={"Sign Me Up!"} />
        </div>
        <div className={[styles.right, styles.imageContainers].join(" ")}>
          <div
            className={styles.imageLarge}
            style={{
              alignSelf: "flex-start",
              backgroundImage: "url(/ball.jpg)",
            }}
          ></div>
          <div
            className={styles.imageSmall}
            style={{
              alignSelf: "flex-start",
              backgroundImage: "url(/zinduka3.jpg)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ChangeSection;
