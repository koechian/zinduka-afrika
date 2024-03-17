"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";
import { inter, sentient, tenor_sans } from "@/app/fonts";
import { gsap } from "gsap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);

  // Authentication -> returns token
  async function authenticate() {
    const auth = await fetch("/api/authorization", { method: "POST" });
    return JSON.parse(await auth.json())["access_token"];
  }

  // //   Register ipn url -> returns ipn id
  // async function registerIPN(token: string) {
  //   try {
  //     const response = await fetch(credentials.ipnURL, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //       body: JSON.stringify({
  //         url: credentials.ipnCallback,
  //         ipn_notification_type: "GET",
  //       }),
  //     });

  //     const data = await response.json();

  //     return data["ipn_id"];
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  // // gets and packages all the form data and any more information needed
  // // gets form data -> returns ready assembled data payload
  function getData(formData: any) {
    return {
      Amount: formData["amount"],
      TransactionDesc: formData["description"],
      callback_url: "https://zinduka-afrika.org/thanks.html",
      // cancellation_url: "https://zinduka-afrika.org",
    };
  }

  // //  send payment request to server

  // async function sendOrder(payload: any, token: string) {
  //   try {
  //     const response = await fetch(credentials.submitOrder, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     return await response.json();
  //   } catch (error) {
  //     console.error(error);
  //     // throw error
  //   }
  // }

  async function onDonate() {
    let token, payload, orderDetails;

    try {
      //   1. Authenticate with pesapal servers

      token = await authenticate();
      //   2. Get data to be submitted
      payload = getData(formData);

      console.log(payload);

      //   4. send the payload
      // orderDetails = await sendOrder(payload, token);

      //   5. redirect the user to the Pesapal page to complete the payment
      // redirect(orderDetails["redirect_url"]);
    } catch (error) {
      console.error(error);
    }
  }

  // function redirect(url: string) {
  //   window.location.replace(url);
  // }

  // // const showError = (message: string) => {
  // //   toast.error(message, {
  // //     position: toast.POSITION.TOP_RIGHT
  // //   });
  // // }
  // // END HANDLE PESAPAL

  // // ==============================================

  // // START HANDLE FORM DATA

  const [formData, setFormData] = useState({
    BusinessShortCode: "88990",
    Passsword: "",
    Timestamp: new Date().getTime(),
    TransactionType: "CustomerBuyGoodsOnline",
    Amount: "", // State to store amount
    PartyA: "", // Phone number
    PartyB: "88990",
    PhoneNumber: "",
    CallBackURL: "",
    AccountReference: "Zinduka Afrika Foundation",
    TransactionDesc: "This donation will help further our goals",
    // State to store cause/project
    title: "Mr", // State to store title
    firstname: "", // State to store first name
    lastname: "", // State to store last name
    email: "", // State to store email
  });

  // Function to handle input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   Call data handler
  };

  // END HANDLE FORM DATA

  // START HANDLE ANIMATIONS

  // useEffect(() => {
  //   // Nav fold down animation
  //   let tl = gsap.timeline();
  //   tl.from(navRef.current, { height: 0, opacity: 0, duration: 0.5 });

  //   // Individual Links stagger down animation
  //   tl.from(Array.from(linksRef.current?.children ?? []) as Element[], {
  //     opacity: 0,
  //     y: -10,
  //     duration: 0.3,
  //     stagger: 0.01,
  //   });

  //   // links hover animation
  //   const links = linksRef.current?.children;

  //   if (links)
  //     for (let i = 0; i < links.length; i++) {
  //       links[i].addEventListener("mouseenter", () => {
  //         gsap.to(links[i], { scale: 1.15, color: "#043f2e", duration: 0.3 });
  //       });
  //       links[i].addEventListener("mouseleave", () => {
  //         gsap.to(links[i], { scale: 1, color: "black", duration: 0.3 });
  //       });
  //     }
  // }, []);

  // END HANDLE ANIMATIONS

  // =======================================

  return (
    <>
      <ToastContainer />
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

            {/*<li className="ml-5">*/}
            {/*  <div className="link-container">*/}
            {/*    <a*/}
            {/*      className={styles.linkText}*/}
            {/*      href="https://zindukaafrika74.pixieset.com/"*/}
            {/*      target={"_blank"}*/}
            {/*    >*/}
            {/*      Gallery*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</li>*/}
            {/*<li className="ml-5">*/}
            {/*  <svg*/}
            {/*    width="5"*/}
            {/*    height="5"*/}
            {/*    viewBox="0 0 5 5"*/}
            {/*    fill="none"*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*  >*/}
            {/*    <circle cx="2.5" cy="2.5" r="2.5" fill="#989898" />*/}
            {/*  </svg>*/}
            {/*</li>*/}
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
          ref={donateRef}
          className={[inter.className, styles.donateContainer].join(" ")}
        >
          <Sheet>
            <SheetTrigger>
              <span className={styles.donate}>DONATE</span>
            </SheetTrigger>
            <SheetContent className={styles.sheet}>
              <SheetHeader>
                <SheetTitle>
                  {" "}
                  <span
                    className={[styles.donateHeader, sentient.className].join(
                      " "
                    )}
                  >
                    Donate
                  </span>{" "}
                </SheetTitle>
                <SheetDescription>
                  <p
                    className={[styles.sheetDescription, inter.className].join(
                      " "
                    )}
                  >
                    By making a donation, you can contribute to our mission of
                    establishing effective and lasting support systems.
                    <br />
                    <br />
                    Local support can be made via Automatic MPESA prompts or
                    manually via the Paybill 88990 "Zinduka Afrika"
                    <br />
                    <br />
                    International Donors can send their support through Sendwave
                    or via Bank Transfer.
                  </p>
                </SheetDescription>
              </SheetHeader>
              <div className={styles.sheetContent}>
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <h2 className={styles.tabtitle}>Your Details</h2>
                  </div>
                  <div className={styles.internationalContent}>
                    <div>
                      <select
                        onChange={handleInputChange}
                        className={[
                          styles.internationalInputs,
                          inter.className,
                        ].join(" ")}
                        placeholder={"Title"}
                        name={"title"}
                        defaultValue="Mr"
                      >
                        <option value={"Mr"}>Mr.</option>
                        <option value={"Mrs"}>Mrs.</option>
                        <option value={"Miss"}>Miss.</option>
                        <option value={"Ms"}>Ms.</option>
                      </select>
                    </div>
                    <div>
                      <input
                        onChange={handleInputChange}
                        required
                        className={[
                          styles.internationalInputs,
                          inter.className,
                        ].join(" ")}
                        placeholder={"First Name"}
                        name={"firstname"}
                        type={"text"}
                      ></input>
                      <input
                        required
                        onChange={handleInputChange}
                        className={[
                          styles.internationalInputs,
                          inter.className,
                        ].join(" ")}
                        placeholder={"Last Name"}
                        name={"lastname"}
                        type={"text"}
                      ></input>
                    </div>
                    <div>
                      <input
                        required
                        onChange={handleInputChange}
                        className={[
                          styles.internationalInputs,
                          inter.className,
                        ].join(" ")}
                        placeholder={"Email"}
                        type={"email"}
                        name={"email"}
                      ></input>
                    </div>
                    <div>
                      <select
                        onChange={handleInputChange}
                        className={[
                          styles.internationalInputs,
                          inter.className,
                        ].join(" ")}
                        name={"currency"}
                      >
                        <option value={"USD"}>USD</option>
                        <option value={"EUR"}>EUR</option>
                        <option value={"KES"}>KSH</option>
                        <option value={"GBP"}>GBP</option>
                        <option value={"AUD"}>AUD</option>
                        <option value={"USD"}>USD</option>
                        <option value={"ZAR"}>ZAR</option>
                      </select>
                      <input
                        onChange={handleInputChange}
                        className={[
                          styles.internationalInputs,
                          inter.className,
                          styles,
                        ].join(" ")}
                        name={"amount"}
                        required
                        placeholder={"Amount to give"}
                        min={1}
                      ></input>
                    </div>
                    <div>
                      <textarea
                        onChange={handleInputChange}
                        className={[
                          styles.internationalInputs,
                          inter.className,
                        ].join(" ")}
                        placeholder={"Leave a note :)"}
                        name={"description"}
                        rows={1}
                        cols={30}
                      ></textarea>
                    </div>
                    <div>
                      <Dialog>
                        <DialogTrigger>
                          <button
                            type={"submit"}
                            className={[
                              styles.processDonation,
                              inter.className,
                            ].join(" ")}
                          >
                            Submit
                          </button>
                        </DialogTrigger>
                        <DialogContent style={{ zIndex: 1000 }}>
                          <DialogHeader>
                            <DialogTitle>
                              <span className={styles.dialogTitle}>
                                Redirecting
                              </span>
                            </DialogTitle>
                            <DialogDescription>
                              <span className={inter.className}>
                                You are about to be redirected to a secure
                                PesaPal window to complete your donation.
                              </span>
                            </DialogDescription>
                          </DialogHeader>
                          <button
                            onClick={onDonate}
                            type={"submit"}
                            className={[
                              styles.processDonation,
                              inter.className,
                            ].join(" ")}
                          >
                            Okay
                          </button>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </form>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
