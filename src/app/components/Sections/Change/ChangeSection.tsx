"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import MyButton from "../../Utils/button/Button";
import gsap from "gsap";

const ChangeSection = () => {
  const wrapper = useRef(null);
  const section = useRef<HTMLDivElement>(null);

  // images ref
  const image1 = useRef<HTMLDivElement>(null);
  const image2 = useRef<HTMLDivElement>(null);
  const image3 = useRef<HTMLDivElement>(null);
  const image4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // images animation
    if (image1.current && image2.current && image3.current && image4.current) {
      gsap.to(image1.current, {
        x: () => gsap.utils.random(-40, 40),
        y: () => gsap.utils.random(-40, 40),
        duration: 3,
        repeat: -1,
        yoyo: true,
      });
      gsap.to(image2.current, {
        x: () => gsap.utils.random(-40, 40),
        y: () => gsap.utils.random(-40, 40),
        duration: 3,
        repeat: -1,
        yoyo: true,
      });
      gsap.to(image3.current, {
        x: () => gsap.utils.random(-40, 40),
        y: () => gsap.utils.random(-40, 40),
        duration: 3,
        repeat: -1,
        yoyo: true,
      });
      gsap.to(image4.current, {
        x: () => gsap.utils.random(-40, 40),
        y: () => gsap.utils.random(-40, 40),
        duration: 3,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [section, image1, image2, image3, image4]);

  return (
    <section
      ref={wrapper}
      className={styles.wrapper}
      style={{ backgroundImage: "url(/change.svg)" }}
    >
      <div ref={section} className={styles.container}>
        <div className={[styles.left, styles.imageContainers].join(" ")}>
          <div
            ref={image1}
            className={styles.imageLarge}
            style={{ backgroundImage: "url(/zinduka5.jpg)" }}
          ></div>
          <div
            ref={image2}
            className={styles.imageSmall}
            style={{
              backgroundImage: "url(/zinduka4.jpg)",
            }}
          ></div>
        </div>
        <div className={styles.center}>
          <p>
            Join us and be part of a positive change in the world. <br />
            <br />
            With over:
          </p>
          <div className={styles.numberWrapper}>
            <span>129,355+</span>
          </div>
          <p>Other like minded mentors, donors, leaders, speakers & sponsors</p>
          <MyButton type={"Primary"} title={"Learn More"} />
        </div>
        <div className={[styles.right, styles.imageContainers].join(" ")}>
          <div
            ref={image3}
            className={styles.imageLarge}
            style={{
              alignSelf: "flex-start",
              backgroundImage: "url(/ball.jpg)",
            }}
          ></div>
          <div
            ref={image4}
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
