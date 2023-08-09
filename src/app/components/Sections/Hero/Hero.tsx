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
import {className} from "postcss-selector-parser";

const Hero = () => {
  const heroSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footers = document.querySelectorAll(".cardMedFooter");

    gsap.from(heroSection.current, {opacity:0, duration:0.7, y:-50})


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
      <section className={styles.heroSection} ref={heroSection} id={"heroSection"}>
      <div id={"hero"} className={styles.hero}>
        <h1 className={styles.heroText}>
          <span className={styles.heroSpan}>Arise!</span> <br /> Change the
          World
        </h1>
        <p className={[inter.className, "heroTextP"].join(" ")}>
          Impacting futures-one life at a time
          <br /> through education and health.
        </p>
        <div
          className={[styles.buttonContainer, inter.className].join(" ")}
        >
          <MyButton type={"Secondary"} title={"Learn More"} />
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

        <div id={"popoverCards"} className={styles.popoverContainer}>

          <a href={'/Zinduka.pdf'} download={'Zinduka Profile.pdf'} >
          <div className={[styles.popoverCard,inter.className].join(" ")}>
            <div className={styles.door}>
              <h3 className={inter.className}>About Zinduka Afrika</h3>
              <br/>
              <p className={inter.className}>
              Read more on our mission statement, our vision for the future and how we strive
              to extend help across ethnic lines, social classes, academics and physical boundaries
              to those in need.
              </p>
            </div>
            <p>
              From humble hearts to towering peaks,
              In every soul, the fire speaks,
              Unite as one, let hope unfurl,
              Arise! Change the world.

              Beyond the doubts that hold us down,
              With courage strong, our spirits crown,
              A destiny we can't but swirl,
              Arise! Change the world.

              Through struggles faced, we'll persevere,
              With empathy, we'll dry each tear,
              In unity, our strength is curled,
              Arise! Change the world.
            </p>
            <div className={styles.flickCard}>
             <aside>
               <h3 className={inter.className}>Click to read</h3>
             </aside>
            </div>
          </div>
          </a>

          <a href={'/Zinduka Education Programme.pdf'} download={'Education Programme.pdf'} >
          <div className={[styles.popoverCard,inter.className].join(" ")}>
            <div className={[styles.door,inter.className].join(" ")}>
              <h3 className={inter.className}> Zinduka Afrika Education Programme</h3>
              <br/>
              <p className={inter.className}>
              How the Zinduka Afrika Education Programme is impacting the education sector through
              outreaches to schools, mentorship programmes, sanitary pads donations and scholarships.
              </p>
            </div>
            <p>
              From humble hearts to towering peaks,
              In every soul, the fire speaks,
              Unite as one, let hope unfurl,
              Arise! Change the world.

              Beyond the doubts that hold us down,
              With courage strong, our spirits crown,
              A destiny we can't but swirl,
              Arise! Change the world.

              Through struggles faced, we'll persevere,
              With empathy, we'll dry each tear,
              In unity, our strength is curled,
              Arise! Change the world.
            </p>
            <div className={styles.flickCard}>
              <aside>
                <h3 className={inter.className}>Click to read</h3>
              </aside>
            </div>
          </div>
            </a>


        </div>
      </div>

      <div className={styles.cardsContainer}>
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

                <a target={'_blank'} href="https://amref.org/position-statements/amref-health-africa-statement-on-addressing-period-poverty-and-stigma-in-kenya/#:~:text=The%20fact%20that%2065%25%20of,and%20preventing%20infection%20during%20menstruation.">
                <div
                  className={[styles.cardMedFooter, "cardMedFooter"].join(" ")}
                >
                  <p style={{ fontSize: "1.6em" }}>Read about this</p>
                  <CustomLink foreground="#043f2e" background="#c8f168" />
                  {/* Custom Link Component */}
                </div>
                </a>
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
                <a target={'_blank'} href="https://www.facebook.com/people/Zinduka-Afrika/100067437003426/?paipv=0&eav=AfaungGYcbM5YgLSNDbFCPm9r6xm80t0MXuPGbv8wTCjnM7zSCLVEEbVTkSFCS023WU&_rdr">
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
      </section>
    </>
  );
};

export default Hero;
