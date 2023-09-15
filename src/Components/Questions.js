import React, { useContext } from "react";
import { ApiCtx } from "../Context/ApiProvider";

import styles from "../Styles/Components/Questions.module.css";
import decoder from "html-entities-decoder";

const Questions = () => {
  const { fixedData, currentQuestion } = useContext(ApiCtx);

  return (
    <div className={styles.questionMain}>
      {currentQuestion + 1} :{fixedData && decoder(fixedData.question)}
    </div>
  );
};

export default Questions;
