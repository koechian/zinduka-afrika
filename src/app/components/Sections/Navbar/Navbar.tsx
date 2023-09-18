"use client";

import React, {useEffect, useRef, useState} from "react";
import styles from "./navbar.module.css";
import {inter, sentient, tenor_sans} from "@/app/fonts";
import {gsap} from "gsap";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Toggle} from "@/components/ui/toggle";


const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);


  // START HANDLE PESAPAL
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
    return await fetch(demoCredentials.authURL,
        {
          method: 'POST',
          headers: demoCredentials.header,
          body: JSON.stringify({
            consumer_key: demoCredentials.consumer_key,
            consumer_secret: demoCredentials.consumer_secret
          })
        })
        .then((response) => {
          return response.json()
        }).then((responseData) => {
          if (responseData['status'] == '200') {
            return responseData['token']
          } else {
            console.error("API Error: ", responseData.error.code)
            toast.error("PesaPal Error", {
              position: toast.POSITION.TOP_RIGHT
            });
          }
        }).catch((error) => {
          toast.error("There has been an issue processing the request", {position: toast.POSITION.TOP_RIGHT})
          console.log(error)
        })
  }

  // END HANDLE PESAPAL

  // ====================================

  // START HANDLE DONATE TABS

  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState('');
  // Function to handle the option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // END HANDLE DONATE TABS

  // ==============================================

  // START HANDLE FORM DATA

    const [formData, setFormData] = useState({
      frequency: '', // State to store frequency
      currency: 'USD', // State to store currency
      amount: '',   // State to store amount
      title: 'Mr',    // State to store title
      firstname: '', // State to store first name
      lastname: '',  // State to store last name
      email: '',     // State to store email
      cause: '',     // State to store cause/project
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Log or process the formData as needed
      console.log(formData);
    };

  // END HANDLE FORM DATA

  // START HANDLE ANIMATIONS

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

  // END HANDLE ANIMATIONS

  // =======================================

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
      >
      <Sheet>
        <SheetTrigger>
            <span className={styles.donate}>DONATE</span>
        </SheetTrigger>
        <SheetContent className = {styles.sheet}>
          <SheetHeader>
            <SheetTitle> <span className={[styles.donateHeader,sentient.className].join(" ")}>Donate</span> </SheetTitle>
            <SheetDescription>
              <p className={[styles.sheetDescription,inter.className].join(" ")}>By making a donation, you can contribute to our mission of establishing effective and lasting support systems.</p>
            </SheetDescription>
          </SheetHeader>
          <div className={styles.sheetContent}>

            <form onSubmit={handleFormSubmit}>
            <Tabs defaultValue="landing" className="w-[400px]">
              <TabsContent value="landing">
                <div className={styles.defaultContent}>
                  <div>
                    <div>
                    <p className={[styles.defaultContentHeaders,inter.className].join(" ")}>How often would you like to give?</p>
                    </div>
                    <div>
                    <Toggle name={"frequency"} value={"monthly"} className={[styles.toggle,inter.className].join(" ")}>Monthly</Toggle>
                    <Toggle name={"frequency"} value={"once"} className={[styles.toggle,inter.className].join(" ")}>One Time Gift</Toggle>
                    </div>
                  </div>
                  <div>
                    <div>
                    <p className={[styles.defaultContentHeaders,inter.className].join(" ")}>How much would you like to give?</p>
                    </div>
                    <div>
                    <select onChange={handleInputChange}
                            className={[styles.currencySelector,inter.className].join(" ")}
                            name={"currency"}>
                      <option value={"USD"}>USD</option>
                      <option value={"EUR"}>EUR</option>
                      <option value={"KES"}>KSH</option>
                      <option value={"GBP"}>GBP</option>
                      <option value={"AUD"}>AUD</option>
                      <option value={"USD"}>USD</option>
                      <option value={"ZAR"}>ZAR</option>
                    </select>
                    <input onChange={handleInputChange}
                           className={[styles.amountInput,inter.className].join(" ")}
                           name={"amount"}
                           required
                           min={1}
                           type={"number"}></input>
                    </div>
                  </div>
                  <div>
                    <div>
                    <p className={[styles.defaultContentHeaders,inter.className].join(" ")}>How would you like to give?</p>
                    </div>
                    <div>
                    <Toggle onClick={() => handleOptionSelect('MPESA')} className={[styles.toggle,inter.className].join(" ")}>MPESA</Toggle>
                    <Toggle onClick={() => handleOptionSelect('International')} className={[styles.toggle,inter.className].join(" ")}>International</Toggle>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="next">
                <div><h2 className={styles.tabtitle}>Your Details</h2></div>
                {selectedOption == 'MPESA' ? (
                // Render content for MPESA option
                  <div>MPESA DETAILS</div>
                ) : (
                // Render content for International option
                    <div className={styles.internationalContent}>
                      <div>
                        <select onChange={handleInputChange}
                                className={[styles.internationalInputs,inter.className].join(" ")}
                                placeholder={"Title"}
                                name={"title"}
                                defaultValue="Mr">
                          <option value={"Mr"}>Mr.</option>
                          <option value={"Mrs"}>Mrs.</option>
                          <option value={"Miss"}>Miss.</option>
                          <option value={"Ms"}>Ms.</option>
                        </select>
                      </div>
                      <div>
                        <input onChange={handleInputChange}
                               required
                               className={[styles.internationalInputs,inter.className].join(" ")}
                               placeholder={"First Name"}
                               name={"firstname"}
                               type={"text"}></input>
                        <input
                            required
                            onChange={handleInputChange}
                            className={[styles.internationalInputs,inter.className].join(" ")}
                            placeholder={"Last Name"}
                            name={"lastname"}
                            type={"text"}></input>
                      </div>
                      <div>
                        <input
                            required
                            onChange={handleInputChange}
                            className={[styles.internationalInputs,inter.className].join(" ")}
                            placeholder={"Email"}
                            type={"email"}
                            name={"email"}></input>
                      </div>
                      <div>
                        <input
                            onChange={handleInputChange}
                            className={[styles.internationalInputs,inter.className].join(" ")}
                            placeholder={"Cause/Project donating to  (optional)"}
                            type={"text"}
                            name={"cause"}></input>
                      </div>
                      <div>
                        <button type={"submit"} className={[styles.processDonation,inter.className].join(" ")}>
                        Process Donation
                      </button>
                      </div>
                    </div>
                    )}
              </TabsContent>
              <div className={styles.pagination}>
                <TabsList>
                  <TabsTrigger value="landing">Donation</TabsTrigger>
                  <TabsTrigger value="next">Your Details</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
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
