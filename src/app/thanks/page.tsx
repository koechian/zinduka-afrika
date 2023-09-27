import React from "react";
import styles from "@/app/components/Sections/Hero/hero.module.css";
import style from "@/app/components/Sections/ThankYou/thankyou.module.css"
import {inter} from "@/app/fonts";

export default function thanks() {
    return (
        <>
            <div className={[style.container, inter.className].join(" ")}>
            <div id={"hero"} className={[styles.hero,inter.className].join(" ")} >
                <h1 className={styles.heroText}>
                    <span className={styles.heroSpan}>Thank You!</span> <br />
                </h1>
                <p className={[inter.className,style.thankyou].join(" ")} style={{color:"#043f2e"}}>
                    Thank you for your generous donation to Zinduka Afrika. Your support propels our God ordained mission forward, spreading hope and serving our community to influence change to a better tomorrow. May your generosity be a blessing to others as it has been to us.
                    If you have any questions or would like to learn more about our work, please feel free to reach out to us anytime.
                    Email: info@zinduka-afrika.org
                    Call us: +254 114925892
                </p>
            </div>
            </div>
            </>
    );
}