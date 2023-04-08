import React from "react";
import styles from "./navbar.module.css";
import { inter, tenor_sans } from "@/app/fonts";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={tenor_sans.className}>
        <h1 className={styles.logoText}>ZINDUKA AFRIKA</h1>
      </div>
      <div className={styles.navLinks}>
        <ul className="flex items-center justify-evenly">
          <li>
            <div className="link-container ">
              <a className={styles.linkText} href="#">
                Home
              </a>
            </div>
          </li>
          <li className="ml-5">
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#989898" />
            </svg>
          </li>
          <li className="ml-5">
            <div className="link-container">
              <a className={styles.linkText} href="#">
                About Us
              </a>
            </div>
          </li>
          <li className="ml-5">
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#989898" />
            </svg>
          </li>
          <li className="ml-5">
            <div className="link-container">
              <a className={styles.linkText} href="#">
                Gallery
              </a>
            </div>
          </li>
          <li className="ml-5">
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#989898" />
            </svg>
          </li>
          <li className="ml-5">
            <div className="link-container">
              <a className={styles.linkText} href="#">
                FAQ's
              </a>
            </div>
          </li>
          <li className="ml-5">
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="#989898" />
            </svg>
          </li>
          <li className="ml-5">
            <div className="link-container">
              <a className={styles.linkText} href="#">
                Contacts
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className={[inter.className, styles.donateContainer].join(" ")}>
        <span className={styles.donate}>DONATE</span>
      </div>
    </nav>
  );
};

export default Navbar;
