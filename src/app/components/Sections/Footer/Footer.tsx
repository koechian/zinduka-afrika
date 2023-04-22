import React from "react";
import styles from "./footer.module.css";
import { inter } from "@/app/fonts";
import { MdShareLocation } from "react-icons/md";
import CustomLink from "../../Utils/link/CustomLink";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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
                <a href="https://goo.gl/maps/rSCvur5k9s4QDLPm8" target="_Blank">
                  ICC Imara Grounds
                </a>
              </span>
            </div>
          </div>
          <div></div>
          <div className={styles.rightItems}>
            <div>
              <div>
                <a href="">Our Work</a>
                <a href="">Our Story</a>
                <a href="">Mail</a>
              </div>
              <div>
                <a href="">Partners</a>
                <a href="">Gallery</a>
                <a href="">Contact Us</a>
              </div>
              <div>
                <a href="">LinkedIn</a>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>© 2023 Zinduka Afrika Foundation</div>
          <div className={inter.className}>
            website by&nbsp;
            <a className={styles.link} href="">
              {" "}
              koechian
            </a>
          </div>
          <div>
            <div className={styles.donateButton}>
              Donate Now
              <CustomLink foreground="#043F2E" background="#C8F168" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
