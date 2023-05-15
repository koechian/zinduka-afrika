"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { boska, inter } from "@/app/fonts";
import gsap from "gsap";

const Numbers = () => {
  const [impact, impactStats] = useState({ value: 0 });
  const [partnerships, partnerStats] = useState({ value: 0 });
  const [scholarships, scholarStats] = useState({ value: 0 });
  const [sanitary, sanitaryStats] = useState({ value: 0 });
  const wrapper = useRef<HTMLDivElement>(null);

  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const impactTarget = {
      value: impact.value,
    };

    const scholarshipsTarget = {
      value: impact.value,
    };
    const partnershipsTarget = {
      value: impact.value,
    };
    const sanitaryTarget = {
      value: impact.value,
    };

    if (animationTriggered) return;

    const observer = new IntersectionObserver((entries) =>
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            gsap.to(impactTarget, {
              duration: 3,
              value: "+900",
              roundProps: "value",
              ease: "Power1.inOut",
              onUpdate() {
                impactStats({ value: impactTarget.value });
              },
            });
            gsap.to(partnershipsTarget, {
              duration: 3,
              value: "+=60",
              roundProps: "value",
              ease: "Power1.inOut",
              onUpdate() {
                partnerStats({ value: partnershipsTarget.value });
              },
            });
            gsap.to(scholarshipsTarget, {
              duration: 3,
              value: "+=50",
              roundProps: "value",
              ease: "Power1.inOut",
              onUpdate() {
                scholarStats({ value: scholarshipsTarget.value });
              },
            });
            gsap.to(sanitaryTarget, {
              duration: 2,
              value: "+=2",
              roundProps: "value",
              ease: "Power1.inOut",
              onUpdate() {
                sanitaryStats({ value: sanitaryTarget.value });
              },
            });
            setAnimationTriggered(true);
          }
        },
        {
          once: true, // Only trigger the animation once per element
        }
      )
    );

    // @ts-ignore
    observer.observe(wrapper.current);
    // @ts-ignore
    return () => observer.unobserve(wrapper.current);
  }, [animationTriggered, wrapper]);

  return (
    <section className={styles.wrapper}>
      <div
        ref={wrapper}
        className={styles.contentWrapper}
        style={{ backgroundImage: "url(/numbers.webp" }}
      >
        <div className={styles.titleText}>
          <h1 style={{ fontSize: "2.4em" }}>ZAF by the Numbers</h1>
          <p
            className={inter.className}
            style={{ fontSize: "1em", color: "#D1DCDA", textAlign: "center" }}
          >
            Get involved and positively impact a young life through Zinduka
            Afrika
          </p>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "4em", fontWeight: "bold" }}
            >
              {impact.value}
            </div>
            <div className={styles.text}>
              <p className={inter.className}>
                Young lives impacted through ZAF ministry
              </p>
            </div>
          </div>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "4em", fontWeight: "bold" }}
            >
              {partnerships.value}
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
              style={{ fontSize: "4em", fontWeight: "bold" }}
            >
              {scholarships.value}
            </div>
            <div className={styles.text}>
              <p className={inter.className}>Scholarships awarded</p>
            </div>
          </div>
          <div className={styles.numbersDiv}>
            <div
              className={boska.className}
              style={{ fontSize: "4em", fontWeight: "bold" }}
            >
              {sanitary.value}k+
            </div>
            <div className={styles.text}>
              <p className={inter.className}>Sanitary Towels donated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
