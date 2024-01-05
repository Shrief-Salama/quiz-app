import React from "react";

import styles from "../Styles/Components/Questions.module.css";
import decoder from "html-entities-decoder";

const Questions = ({ singleQuestion, currentQuestion }) => {
  return (
    <div className={styles.questionMain}>
      <p>
        {currentQuestion + 1} :
        {singleQuestion && decoder(singleQuestion.question)}
      </p>
    </div>
  );
};

export default Questions;
