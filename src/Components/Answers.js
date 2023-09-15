import React, { useContext } from "react";
import { ApiCtx } from "../Context/ApiProvider";
import decoder from "html-entities-decoder";

import styles from "../Styles/Components/Answer.module.css";

const Answers = () => {
  const { data, currentQuestion } = useContext(ApiCtx);

  //Combin Answers
  const combinAnswers = () => {
    return data.map((quest) => {
      const allAnswers = [...quest.incorrect_answers, quest.correct_answer];
      return { ...quest, allAnswers };
    });
  };

  const newData = combinAnswers();

  const fixedNewData = newData[currentQuestion];

  const ansNumber = ["A", "B", "C", "D"];

  return (
    <div className={styles.answersMain}>
      <ul className={styles.answersListMain}>
        {fixedNewData &&
          fixedNewData.allAnswers.map((ans, index) => (
            <li key={index} className={styles.answersList}>
              <span className={styles.answersNumber}>{ansNumber[index]}</span>
              <span className={styles.answer}>{decoder(ans)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Answers;
