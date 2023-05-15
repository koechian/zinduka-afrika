"use client";

import React, { useEffect, useRef } from "react";
import styles from "./preloader.module.css";
import { gsap } from "gsap";

const Preloader = () => {
  const clipTop = useRef<HTMLDivElement>(null);
  const clipBottom = useRef<HTMLDivElement>(null);
  const clipCenter = useRef<HTMLDivElement>(null);
  const marquee1 = useRef<HTMLDivElement>(null);
  const marquee2 = useRef<HTMLDivElement>(null);
  const marquee3 = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  const marqueeContainer1 = useRef<HTMLDivElement>(null);
  const marqueeContainer2 = useRef<HTMLDivElement>(null);
  const marqueeContainer3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeline = gsap.timeline();

    // animate the top and bottom in
    timeline
      .from(clipBottom.current, {
        delay: 1,
        height: "50vh",
        ease: "power1.inOut",
      })
      .from(
        clipTop.current,
        { delay: 1, height: "50vh", ease: "power1.inOut" },
        0
      )
      // animate text in
      .to(
        marquee1.current,
        { delay: 0.75, top: "50%", ease: "power4.inOut", duration: 1 },
        0
      )
      .to(marquee1.current, { delay: 1, left: "100%", duration: 1 }, 0)
      .to(
        marquee2.current,
        { delay: 0.75, top: "50%", ease: "power4.inOut", duration: 1 },
        0
      )
      .to(marquee2.current, { delay: 1, left: "100%", duration: 1 }, 0)
      .to(
        marquee3.current,
        { delay: 0.75, top: "50%", ease: "power4.inOut", duration: 1 },
        0
      )
      .from(marquee3.current, { opacity: 1, duration: 1 }, 0)
      // animate top and bottom out
      .to(
        clipTop.current,
        {
          delay: 1,
          clipPath: "inset(0 0 100% 0",
          ease: "power4.inOut",
          duration: 1.5,
        },
        1
      )
      .to(
        clipBottom.current,
        {
          delay: 1,
          clipPath: "inset(100% 0 0 0)",
          ease: "power4.inOut",
          duration: 1.5,
        },
        1
      )
      .to(
        clipBottom.current,
        {
          delay: 1,
          clipPath: "inset(100% 0 0 0)",
          ease: "power4.inOut",
          duration: 1.5,
        },
        1
      )
      .to(clipCenter.current, { duration: 1, opacity: 0, y: "-10%" })
      .to(loader.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.killTweensOf(loader.current);
          if (loader.current) loader.current.remove();
        },
      });
  }, []);

  return (
    <div ref={loader} className={styles.loader}>
      <div
        ref={clipTop}
        className={[styles.loaderClip, styles.clipTop].join(" ")}
      >
        <div ref={marquee1} className={styles.marquee}>
          <div ref={marqueeContainer1} className={styles.marqueeContainer}>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
            Arise!
            <span>Arise! </span>
            <span>Arise! </span>
          </div>
        </div>
      </div>
      <div
        ref={clipBottom}
        className={[styles.loaderClip, styles.clipBottom].join(" ")}
      >
        <div ref={marquee2} className={styles.marquee}>
          <div ref={marqueeContainer2} className={styles.marqueeContainer}>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
          </div>
        </div>
      </div>
      <div ref={clipCenter} className={[styles.clipCenter].join(" ")}>
        <div ref={marquee3} className={styles.marquee}>
          <div ref={marqueeContainer3} className={styles.marqueeContainer}>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
            <span>Arise! </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
