import React from "react";
import styles from "@/app/components/Sections/Hero/hero.module.css";
import style from "@/app/components/Sections/ThankYou/thankyou.module.css"
import {inter} from "@/app/fonts";
import {useRouter} from "next/navigation";

export default function thanks() {
    return (
        <>
            <div className={[style.container, inter.className].join(" ")}>
            <div id={"hero"} className={[styles.hero,inter.className].join(" ")} >
                <h1 className={styles.heroText}>
                    <span className={styles.heroSpan}>Thank You!</span> <br />
                </h1>
                <p className={[inter.className,style.thankyou].join(" ")} style={{color:"#043f2e"}}>Your contribution will help us support underprivileged children's education. Your kindness and generosity are making a positive difference in the lives of those we serve.

                    We are deeply grateful for your commitment to our cause and for being a part of our mission to reflect the compassionate nature of
                    God by facilitating social transformation in the community through social and development
                    interventions. Without donors like you, our work would not be possible.

                    Once again, thank you for your generosity and compassion. We look forward to keeping you updated on the progress of our projects and the impact of your donation. Your support inspires us to continue striving for positive change in our community.

                    If you have any questions or would like to learn more about our work, please feel free to reach out to us anytime.
                </p>
            </div>
            </div>
            </>
    );
}