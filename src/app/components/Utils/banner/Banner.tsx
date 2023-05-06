"use client";
import React, { useEffect, useRef } from "react";
import styles from "./banner.module.css";
import gsap from "gsap";

const Banner = () => {
  //   animations
  const topBanner = useRef<HTMLDivElement>(null);
  const bottomBanner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // @ts-ignore
      gsap.to(topBanner.current.children, {
        duration: 0.2,
        x: -scrollPosition / 6,
        ease: "power1.inOut",
      });
      // @ts-ignore
      gsap.to(bottomBanner.current.children, {
        duration: 0.2,
        //   @ts-ignore
        x: (scrollPosition - bottomBanner.current.offsetTop) / 6,
        ease: "power1.inOut",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  });

  const spans: any = [];
  for (let index = 0; index < 100; index++) {
    spans[index] = "arise, change the world * * ";
  }

  return (
    <div className={styles.container}>
      <div
        ref={topBanner}
        className={[styles.topBanner, styles.banner].join(" ")}
      >
        {spans.map((span: string, index: number) => (
          <span key={index}> {span}</span>
        ))}
      </div>
      <div
        ref={bottomBanner}
        className={[styles.bottomBanner, styles.banner].join(" ")}
      >
        <span>the world * *</span>
        {spans.map((span: string, index: number) => (
          <span key={index}> {span}</span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
