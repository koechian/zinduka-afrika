import React from "react";
import styles from "./question.module.css";
import { inter } from "@/app/fonts";

interface QuestionContent {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: QuestionContent) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.question}>
        <span>{question}</span>
      </div>
      <div className={[styles.answer, inter.className].join(" ")}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
