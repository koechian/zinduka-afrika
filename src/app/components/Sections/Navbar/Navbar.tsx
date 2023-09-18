"use client";

import React, { useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import { inter, tenor_sans } from "@/app/fonts";
import { gsap } from "gsap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);

  // demo credentials
  const demoCredentials = {
    authURL : 'https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken',
    ipnURL:'https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN',
    ipnCallback:'https://zinduka-afrika-dev.vercel.app',
    consumer_key:'qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW',
    consumer_secret:'osGQ364R49cXKeOYSpaOnT++rHs=',
    header:{
      'Accept': 'application/json',
      'Content-Type':'application/json',
    }
  }

  // live credentials
  const credentials={
    authURL:'https://pay.pesapal.com/v3/api/Auth/RequestToken',
    ipnURL: 'https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN'
  }

  const handleDonateClick = () => {
    pesaPalAuth().then((token)=>{
    return handleIPN(token).then((response)=>{
      return (response["ipn_id"])
    })
    })

  }

  async function handleIPN(token){

    let response = await fetch(demoCredentials.ipnURL, {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        Authorization: 'Bearer ' + token
      },
      body:JSON.stringify({
        url:demoCredentials.ipnCallback,
        ipn_notification_type:"GET"
      })

    })

    return response.json()

  }
  async function pesaPalAuth(){
      let response = await fetch(demoCredentials.authURL,
          {
            method:'POST',
            headers:demoCredentials.header,
            body:JSON.stringify({consumer_key: demoCredentials.consumer_key,consumer_secret:demoCredentials.consumer_secret})})
          .then((response)=>{
        return response.json()
      }).then((responseData)=>{
        if(responseData['status']=='200'){
        let token = responseData['token']
          return token
        }else{
          console.error("API Error: ",responseData.error.code)
          toast.error("PesaPal Error", {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      }).catch((error)=>{
        toast.error("There has been an issue processing the request",{position:toast.POSITION.TOP_RIGHT})
        console.log(error)
      })

    return response
  }

  useEffect(() => {
    // Nav fold down animation
    let tl = gsap.timeline();
    tl.from(navRef.current, { height: 0, opacity: 0, duration: 0.5 });

    // Individual Links stagger down animation
    tl.from(Array.from(linksRef.current?.children ?? []) as Element[], {
      opacity: 0,
      y: -10,
      duration: 0.3,
      stagger: 0.01,
    });

    // links hover animation
    const links = linksRef.current?.children;

    if (links)
      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", () => {
          gsap.to(links[i], { scale: 1.15, color: "#043f2e", duration: 0.3 });
        });
        links[i].addEventListener("mouseleave", () => {
          gsap.to(links[i], { scale: 1, color: "black", duration: 0.3 });
        });
      }
  }, []);
  return (
      <><ToastContainer/>
    <nav ref={navRef} className={styles.nav}>
      <div className={tenor_sans.className}>
        <h1
          style={{ transition: "ease-in-out 0.3s" }}
          className={styles.logoText}
        >
          <a href="#hero">ZINDUKA AFRIKA</a>{" "}
        </h1>
      </div>
      <div className={styles.navLinks}>
        <ul ref={linksRef}>
          <li>
            <div className="link-container ">
              <a className={styles.linkText} href="#hero">
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
          <li>
            <div className="link-container ">
              <a
                className={styles.linkText}
                download={"Jan-June ZAF Newsletter.pdf"}
                href={"/newsletter.pdf"}
              >
                Newsletter
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
              <a
                className={styles.linkText}
                href="https://zindukaafrika74.pixieset.com/"
                target={"_blank"}
              >
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
              <a className={styles.linkText} href="#faq">
                FAQ's
              </a>
            </div>
          </li>

        </ul>
      </div>

      <div
          onClick={handleDonateClick}
        ref={donateRef}
        className={[inter.className, styles.donateContainer].join(" ")}
      ><span className={styles.donate}>DONATE</span>
      </div>
    </nav>
      </>
  );
};

export default Navbar;
