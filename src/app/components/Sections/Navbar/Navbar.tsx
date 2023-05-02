"use client";

import React, {useEffect, useRef} from "react";
import styles from "./navbar.module.css";
import { inter, tenor_sans } from "@/app/fonts";
import { gsap } from "gsap";


const Navbar = () => {

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{

    // Nav fold down animation
    let tl = gsap.timeline()
    tl.from(
        navRef.current,
        {height:0,opacity:0,duration:0.6}
    );

    // Individual Links stagger down animation
    tl.from(Array.from(linksRef.current?.children ?? []) as Element[] , {opacity:0,y:-10,duration:0.5,stagger:0.01},);


  // links hover animation
    const links = linksRef.current?.children;


    if (links)
    for (let i=0;i<links.length;i++){
      links[i].addEventListener('mouseenter',()=>{
        gsap.to(links[i],{scale:1.15,color:"#043f2e",duration:0.3 })
      })
      links[i].addEventListener('mouseleave',()=>{
        gsap.to(links[i],{scale:1,color:"black",duration:0.3 })
      })
    }

  },[])
  return (
    <nav ref={navRef} className={styles.nav}>
      <div className={tenor_sans.className}>
        <h1 style={{transition:"ease-in-out 0.3s"}} className={styles.logoText}>ZINDUKA AFRIKA</h1>
      </div>
      <div className={styles.navLinks}>
        <ul ref={linksRef}>
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
      <div ref={donateRef} className={[inter.className, styles.donateContainer].join(" ")}>
        <span className={styles.donate}>DONATE</span>
      </div>
    </nav>
  );
};

export default Navbar;
