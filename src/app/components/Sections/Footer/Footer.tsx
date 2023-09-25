"use client";
import React, {useEffect, useRef} from "react";
import styles from "./footer.module.css";
import { inter } from "@/app/fonts";
import { MdShareLocation } from "react-icons/md";
import {gsap} from "gsap";

const Footer = () => {

  const container = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    gsap.from(container.current, {opacity:0, duration:0.7, y:-50})
  },[])

  return (
    <div id={"footer"} className={styles.wrapper}>
      <div ref={container} className={styles.container}>
        <div className={styles.top}>
          <div className={styles.leftItems}>
            <div className={styles.leftItems_top}>
              <div>
                <img
                  src="/footer-logo.svg"
                  alt="Zinduka Afrika Logo"
                  style={{ aspectRatio: "initial", width: "30em" }}
                />
              </div>
              <div>
                <span
                  className={inter.className}
                  style={{
                    color: "var(--beige-hex)",
                    fontSize: "0.8em",
                  }}
                >
                  Arise! Change the world.
                </span>
              </div>
            </div>

            <div className={styles.location}>
              <span>
                <MdShareLocation className={styles.locationIcon} />
                <a
                  className={styles.locationLink}
                  href="https://goo.gl/maps/rSCvur5k9s4QDLPm8"
                  target="_Blank"
                >
                  ICC Imara Grounds
                </a>
              </span>
            </div>
          </div>
          <div></div>
          <div className={styles.rightItems}>
            <div>
              <div>
                <a target="_Blank"
                   href="https://iccnairobi.pixieset.com/zinduka/">Our Work</a>
                <a href="">Our Story</a>
                <a href="mailto:zinduka.afrika@gmail.com">Mail</a>
              </div>
              <div>
                <a
                  target="_Blank"
                  href="https://iccnairobi.pixieset.com/zinduka/"
                >
                  Latest Event
                </a>
                <a href="https://goo.gl/maps/rSCvur5k9s4QDLPm8" target="_Blank">
                  Visit Us
                </a>
                <a href="tel:+254 114 925892">Call Us</a>
              </div>
              <div>
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B254716499368%26data%3DAWBuyy38txf7gTAF3d-Vkb22xikzC65pV_1CGL0uy_Q3pIjIwqBkwdFLv4IhqOn3Vj2L3j2gmD2cJycFZ2ahsQSXY4ImYasFX8WtB613xCSRoBJTdiSpjsd1Tql3dhc7lB8PQ5NZLPKHk_GEYmAt5l5QBAcK7YS6PO-ep302nA6ujqQt16RyZK_eP4v89YXdX7KlrHx5VeyLWpdbxbesrvU-caIwDyuTODO5hrjQB2yCqJmjJx-qslbKGCpZPDqG2EYmn4ADWaL89KT8aKmc_V9XiKxfaLLlLrsH7xXjiAHNY0EtWZE%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR3ndCfljQw21JspcxPPCkOH8UstSE1Lc7b2jR1ozybWA3sVljgg5pWLx-w&h=AT38cNJhkU5vXxTU2KUKMQicJBCm5lmQcnrNa3_CCeMsP0RReXjVJDlz8OPtCa-ecsS_0a6MZDLQdCjXQzPKXF4Bk5oBFfS4iXAxmAaVy6bLnJ3d2VEML-HRfPa5ng">
                  WhatsApp
                </a>
                <a href="https://www.facebook.com/people/Zinduka-Afrika/100067437003426/?paipv=0&eav=AfaungGYcbM5YgLSNDbFCPm9r6xm80t0MXuPGbv8wTCjnM7zSCLVEEbVTkSFCS023WU&_rdr">
                  Facebook
                </a>
                <a href="https://twitter.com/zindukaafrika">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>© 2023 Zinduka Afrika</div>
          <div className={[inter.className, styles.personalAttrib].join(" ")}>
            website by&nbsp;
            <a className={styles.link} href="https://koechian.live">
              koechian
            </a>
          </div>
          <div className={styles.donateButtonWrapper}>
            {/*<div className={styles.donateButton}>*/}
            {/*  Donate Now*/}
            {/*  <CustomLink foreground="#043F2E" background="#C8F168" />*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
