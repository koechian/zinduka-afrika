"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { inter } from "@/app/fonts";
import styles from "./hero.module.css";
import MyButton from "../../Utils/button/Button";
import CustomLink from "../../Utils/link/CustomLink";

const Hero = () => {
  const heroText = useRef<HTMLHeadingElement>(null);
  const buttonContainer = useRef<HTMLDivElement>(null);
  const cardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(heroText.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 5,
    }).from(buttonContainer.current, { opacity: 0, y: 20, duration: 1 });

    tl.from(Array.from(cardsContainer.current?.children ?? []) as Element[], {
      opacity: 0,
      x: 20,
      stagger: 0.1,
      duration: 2,
    });
  }, []);

  return (
    <>
      <div id={"hero"} className={styles.hero}>
        <h1 ref={heroText} className={styles.heroText}>
          <span className={styles.heroSpan}>Arise!!!</span> <br /> Change the
          World
        </h1>
        <p className={[inter.className, "heroTextP"].join(" ")}>
          Impacting futures one at a time through spiritual growth,
          <br /> sports, health and education.
        </p>
        <div
          ref={buttonContainer}
          className={[styles.buttonContainer, inter.className].join(" ")}
        >
          <MyButton type={"Primary"} title={"Donate Now"} />

          <MyButton type={"Secondary"} title={"Become a Mentor"} />
        </div>
      </div>

      <div ref={cardsContainer} className={styles.cardsContainer}>
        <div className={styles.mobileTitle}>
          <h1>What we do</h1>
        </div>
        <div className={styles.coloumnsWrapper}>
          {/* col 1 */}
          <div className={styles.cardsCol}>
            <div
              className={[styles.cardMed, styles.card].join(" ")}
              style={{ backgroundColor: "#043f2e" }}
            >
              <div className={styles.cardContentWrapper}>
                <div className={styles.cardMedBody}>
                  <h1 style={{ fontWeight: "bold", fontSize: "4em" }}>65%</h1>
                  <p style={{ fontSize: "1.1em" }}>
                    of girls in Kenya are unable to afford sanitary towels on a
                    monthly basis
                  </p>
                </div>
                <div className={styles.cardMedFooter}>
                  <p style={{ fontSize: "1.6em" }}>Support our Efforts</p>
                  {/* Custom Link Component */}
                  <CustomLink foreground="#043f2e" background="#c8f168" />
                </div>
              </div>
            </div>
            <div
              className={[styles.cardSmall, styles.card].join(" ")}
              style={{ backgroundColor: "#222222" }}
            >
              {/* small card content */}
              <div className={styles.smallcontentWrapper}>
                <div className=""></div>
                <div className="">
                  <p style={{ fontSize: "1.4em" }}>
                    Help them <br /> Excel
                  </p>
                </div>
              </div>
            </div>
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
                <span className={inter.className}>
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
            >
              <div className={styles.cardContentWrapper}>
                <div
                  className={styles.cardMedBody}
                  style={{ color: "#222222" }}
                >
                  <p>
                    Join <strong>500+</strong> people impacting young lives in
                    Kenya and beyond
                  </p>
                </div>
                <div className={styles.cardMedFooter}>
                  <p style={{ color: "#222222", fontSize: "1.4em" }}>
                    Join the Community
                  </p>
                  {/* Custom Link Component */}
                  <CustomLink />
                </div>
              </div>
            </div>
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
                <span className={inter.className}>
                  Sponsor education to the less fortunate in Kenya
                </span>
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
                backgroundSize: "contain",
              }}
            >
              <div className={styles.cardContentWrapper}>
                <div
                  className={styles.cardMedBody}
                  style={{ color: "#222222" }}
                ></div>
                <div className={styles.cardMedFooter}>
                  <p style={{ color: "#222222", fontSize: "1.6em" }}>
                    Explore More
                  </p>
                  {/* Custom Link Component */}
                  <CustomLink />
                </div>
              </div>
            </div>
            <div
              className={[styles.cardSmall, styles.card].join(" ")}
              style={{ backgroundColor: "#043f2e" }}
            >
              <div className={styles.smallcontentWrapper}>
                <div className=""></div>
                <div className="">
                  <p style={{ color: "#c8f168", fontSize: "1.4em" }}>
                    Lorem Ipsum
                    <br /> Ador elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileColoumn}>
          <div
            className={[styles.card].join(" ")}
            style={{
              backgroundImage: "url(/sanitary.jpg)",
            }}
          >
            <div className={styles.overlay}>
              <span>
                Providing sanitary pads to girls in Secondary Schools through
                patnerships
              </span>
              <span className={inter.className} style={{ color: "#9A9A9A" }}>
                65% of girls in Kenya are unable to afford sanitary towels on a
                monthly basis, we aim to reduce that percentage
              </span>
            </div>
          </div>
          <div
            className={[styles.card].join(" ")}
            style={{
              backgroundImage: "url(/prayer.jpg)",
            }}
          >
            <div className={styles.overlay}>
              <span>Impacting young lives through donations and ministry</span>
              <span className={inter.className} style={{ color: "#9A9A9A" }}>
                We conduct outreach missions to children homes across Kenya
              </span>
            </div>
          </div>
          <div
            className={[styles.card].join(" ")}
            style={{
              backgroundImage: "url(/funday.jpg)",
            }}
          >
            <div className={styles.overlay}>
              <span>Sponsoring education for the less priviledged</span>
              <span className={inter.className} style={{ color: "#9A9A9A" }}>
                If you give a man a fish, you feed him for a day. If you teach a
                man to fish, you feed him for a lifetime
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
