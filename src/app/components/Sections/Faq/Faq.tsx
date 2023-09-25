"use client";
import React, {useRef,useEffect} from "react";
import styles from "./faq.module.css";
import { inter } from "@/app/fonts";
import Question from "../../Utils/question/Question";
import {gsap} from "gsap";

const Faq = () => {

  const containerWrapper = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    gsap.from(containerWrapper.current, {opacity:0, duration:0.7, y:-50})
  },[])
  return (
    <section id={"faq"} className={styles.wrapper}>
      <div
        className={styles.container}
        ref={containerWrapper}
        style={{ backgroundImage: "url(/faq.webp)" }}
      >
        <div
          className={styles.logo}
          style={{ backgroundImage: "url(./faq-logo.svg)" }}
        ></div>
        <div className={styles.heading}>
          <h1>Frequently Asked Questions</h1>
          <h6 className={inter.className}>
            Any other questions?{" "}
            <a className={styles.link} href="mailto:zinduka-afrika@gmail.com">
              Email us,
            </a>{" "}
            we would be glad to help
          </h6>
        </div>
        <div className={styles.questions}>
          <Question
            question="Who are you?"
            answer="Zinduka Afrika (ZAF) is a Social Action agent of the International Christian Centre (ICC) registered in Kenya in March 2004 as a Non-Governmental Organization in Kenya and it operates as a ministry under the Social Transformation arm of International Christian Center (ICC) Church, which is an affiliate of Kenya Assemblies of God(KAG) church."
          />
          <Question
            question="What qualify as donations?"
            answer="Anything that would support the beneficiaries really. From sanitary pads, school fees support to even food stuffs and gifts in kind. Anything that will help."
          />
          <Question
            question="Can I Purchase sanitary pads from Zinduka?"
            answer="No. Zinduka Afrika does not directly produce or participate in the sale of sanitary pads, but we partner with organizations that produce them."
          />

          <Question
            question="Who qualifies for support under Zinduka Afrika?"
            answer="Everybody  in the comunity regardles of their tribe, race or religion but  to be considered, one needs to meet all the requirements under the outlined  selection criteria for each specific category."
          />

          <Question
            question="I am working but I have some time in my hands,once in a while. Can I still be of support to Zinduka Afrika whenever I get time ?"
            answer="Yes.There is alot that you can be of support to Zinduka Afrika. We encourage volunteers to come serve with us with their giftings, talents, skills and resources."
          />
          <Question
            question="How else can someone be a blessing to this ministry?"
            answer="One could mentor a scholar, open up your work place for a job study, be a champion In the MHM Program, be a partner and support a scholar financially, Be a prayer partner, the opportunities are endless, it's up to you to deciede."
          />
        </div>
      </div>
    </section>
  );
};
export default Faq;
