import React from "react";
import styles from "./button.module.css";
import { inter } from "@/app/fonts";

interface ButtonOptions {
  title: String;
  type: String;
}

const MyButton = ({ type, title }: ButtonOptions) => {
  switch (type as String) {
    case "Primary":
      return (
        <button
          className={[
            styles.primaryButton,
            styles.button,
            inter.className,
          ].join(" ")}
        >
          {title}
        </button>
      );
    case "Secondary":
      return (
        <button
          className={[
            inter.className,
            styles.secondaryButton,
            styles.button,
          ].join(" ")}
        >
          {title}
        </button>
      );
    default:
      return <button>{title}</button>;
  }
};

export default MyButton;
