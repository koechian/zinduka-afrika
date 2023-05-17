"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { inter } from "@/app/fonts";
import styles from "./hero.module.css";
import MyButton from "../../Utils/button/Button";
import CustomLink from "../../Utils/link/CustomLink";
import {
  Popover,
  Trigger,
  Root,
  Portal,
  Arrow,
  Content,
} from "@radix-ui/react-popover";
import Image from "next/image";

const Hero = () => {
  const heroText = useRef<HTMLHeadingElement>(null);
  const buttonContainer = useRef<HTMLDivElement>(null);
  const cardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl = gsap.timeline();
    const footers = document.querySelectorAll(".cardMedFooter");

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

    //   card footer hover animation
    footers.forEach((footer) => {
      const handleMouseEnter = () => {
        gsap.to(footer, { scale: 1.05, duration: 0.3, ease: "power3.in" });
        console.log("hovered");
      };
      const handleMouseLeave = () => {
        gsap.to(footer, { scale: 1, duration: 0.3, ease: "power3.out" });
      };

      footer.addEventListener("mouseenter", handleMouseEnter);
      footer.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        footer.removeEventListener("mouseenter", handleMouseEnter);
        footer.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      <div id={"hero"} className={styles.hero}>
        <h1 ref={heroText} className={styles.heroText}>
          <span className={styles.heroSpan}>Arise!</span> <br /> Change the
          World
        </h1>
        <p className={[inter.className, "heroTextP"].join(" ")}>
          Impacting futures-one life at a time
          <br /> through education and health.
        </p>
        <div
          ref={buttonContainer}
          className={[styles.buttonContainer, inter.className].join(" ")}
        >
          <MyButton type={"Secondary"} title={"Become a Mentor"} />
          <Root>
            <Trigger className={styles.trigger}>Donate Now</Trigger>
            <Portal>
              <Content
                className={[styles.popoverContent, inter.className].join(" ")}
              >
                <strong>M-PESA</strong> <br />
                Paybill: 889900 <br />
                Account: OVC
                <br />
                <hr />
                <strong>Bank Details</strong> <br />
                Branch: NCBA Bank <br />
                Account:Zinduka Afrika <br />
                Account Number:1000236698
                <Arrow className={styles.popoverArrow} />
              </Content>
            </Portal>
          </Root>
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
                <div
                  className={[styles.cardMedFooter, "cardMedFooter"].join(" ")}
                >
                  <p style={{ fontSize: "1.6em" }}>Support our Efforts</p>
                  <CustomLink foreground="#043f2e" background="#c8f168" />
                  <Root>
                    <Trigger className={styles.trigger}>
                      <div className={styles.invisiDiv}></div>
                    </Trigger>
                    <Portal>
                      <Content
                        className={[
                          styles.popoverContent,
                          inter.className,
                        ].join(" ")}
                      >
                        <strong>M-PESA</strong> <br />
                        Paybill: 889900 <br />
                        Account: OVC
                        <br />
                        <hr />
                        <strong>Bank Details</strong> <br />
                        Branch: NCBA Bank <br />
                        Account:Zinduka Afrika <br />
                        Account Number:1000236698
                        <Arrow className={styles.popoverArrow} />
                      </Content>
                    </Portal>
                  </Root>
                  {/* Custom Link Component */}
                </div>
              </div>
            </div>
            <div
              className={[styles.cardSmall, styles.card].join(" ")}
              style={{ backgroundColor: "#222222" }}
            >
              {/* small card content */}
              <div className={styles.smallcontentWrapper}>
                <div className={styles.handDiv}></div>
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
                <a href="https://iccnairobi.org/">
                  <div
                    className={[styles.cardMedFooter, "cardMedFooter"].join(
                      " "
                    )}
                  >
                    <p style={{ color: "#222222", fontSize: "1.4em" }}>
                      Join the Community
                    </p>
                    {/* Custom Link Component */}
                    <CustomLink />
                  </div>
                </a>
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
                <a href="https://www.facebook.com/people/Zinduka-Afrika/100067437003426/?paipv=0&eav=AfaungGYcbM5YgLSNDbFCPm9r6xm80t0MXuPGbv8wTCjnM7zSCLVEEbVTkSFCS023WU&_rdr">
                  <div
                    className={[styles.cardMedFooter, "cardMedFooter"].join(
                      " "
                    )}
                  >
                    <p style={{ color: "#222222", fontSize: "1.6em" }}>
                      Explore More
                    </p>
                    {/* Custom Link Component */}
                    <CustomLink />
                  </div>
                </a>
              </div>
            </div>
            <div
              className={[styles.cardSmall, styles.card].join(" ")}
              style={{ backgroundColor: "#043f2e" }}
            >
              <div className={styles.smallcontentWrapper}>
                <div className={styles.hopeDiv}></div>
                <div className="">
                  <p style={{ color: "#c8f168", fontSize: "1.4em" }}>
                    Be a beacon
                    <br /> of Hope
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
