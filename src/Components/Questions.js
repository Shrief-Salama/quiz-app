import React, { useContext } from "react";

import styles from "../Styles/Components/Questions.module.css";
import decoder from "html-entities-decoder";
import { ApiCtx } from "../Context/ApiProvider";

const Questions = () => {
  const { singleQuestion, currentQuestion } = useContext(ApiCtx);

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
