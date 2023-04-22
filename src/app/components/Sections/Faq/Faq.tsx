import React from "react";
import styles from "./faq.module.css";
import { inter } from "@/app/fonts";
import Question from "../../Utils/question/Question";

const Faq = () => {
  return (
    <section className={styles.wrapper}>
      <div
        className={styles.container}
        style={{ backgroundImage: "url(/faq.webp)" }}
      >
        <div
          className={styles.logo}
          style={{ backgroundImage: "url(./faq-logo.svg)" }}
        ></div>
        <div className={styles.heading}>
          <h1>Frequenty Asked Questions</h1>
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
            question="Can I donate goods and services instead of money?"
            answer="Lorem ipsum dolor sit amet. Sit quos mollitia et enim modi At inventore optio. Ut atque exercitationem in debitis ratione sed 
voluptate galisum est tempore veritatis."
          />

          <Question
            question="What capacity can I help in?"
            answer="Lorem ipsum dolor sit amet. Sit quos mollitia et enim modi At inventore optio. Ut atque exercitationem in debitis ratione sed 
voluptate galisum est tempore veritatis."
          />

          <Question
            question="Theoretical Question  4?"
            answer="Lorem ipsum dolor sit amet. Sit quos mollitia et enim modi At inventore optio. Ut atque exercitationem in debitis ratione sed 
voluptate galisum est tempore veritatis."
          />
        </div>
      </div>
    </section>
  );
};
export default Faq;
