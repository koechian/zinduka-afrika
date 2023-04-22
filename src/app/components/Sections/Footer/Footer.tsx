import React from "react";
import styles from "./footer.module.css";
import { inter } from "@/app/fonts";
import { MdShareLocation } from "react-icons/md";
import { IconContext } from "react-icons";

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
                  style={{ aspectRatio: "initial", width: "14%" }}
                />
              </div>
              <div>
                <span
                  className={inter.className}
                  style={{
                    color: "var(--beige-hex)",
                    fontSize: "0.8vw",
                  }}
                >
                  Arise! Change the world.
                </span>
              </div>
            </div>

            <div className={styles.location}>
              <span>
                <div>
                  <MdShareLocation />
                </div>
                ICC Imara Grounds
              </span>
            </div>
          </div>
          <div className={styles.rightItems}></div>
        </div>
        <div className={styles.bottom}>
          <div>2023 Copyright</div>
          <div className={inter.className}>website by koechian</div>
          <div>Donate Now</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
