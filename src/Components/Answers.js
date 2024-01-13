import React, { useContext } from "react";

import decoder from "html-entities-decoder";

import styles from "../Styles/Components/Answer.module.css";
import { Col, Container, Row } from "react-bootstrap";

import { ApiCtx } from "../Context/ApiProvider";

const Answers = () => {
  const {
    singleQuestion,
    setMarkedAnswers,
    markedAnswer,
    currentQuestion,
    correctAnswers,
    setCorrectAnswers,
  } = useContext(ApiCtx);

  const ansNumber = ["A", "B", "C", "D"];

  const toggleHandler = (answer) => {
    setMarkedAnswers({
      ...markedAnswer,
      [currentQuestion]: decoder(answer.answer),
    });
    setCorrectAnswers(() => {
      if (answer.answer === singleQuestion.correct_answer) {
        return { ...correctAnswers, [currentQuestion]: decoder(answer.answer) };
      } else {
        return { ...correctAnswers };
      }
    });
  };

  return (
    <div className={styles.answersMain}>
      <ul className={styles.answersListMain}>
        {singleQuestion &&
          singleQuestion.allAnswers.map((answer, index) => (
            <li
              key={answer.id}
              className={
                markedAnswer[currentQuestion] === decoder(answer.answer)
                  ? `${styles.answersListActive} ${styles.answersListInActive}`
                  : `${styles.answersListInActive}`
              }
              onClick={() => toggleHandler(answer)}
            >
              <Row className={styles.answersContent}>
                <Col xs={2} className={styles.answersNumber}>
                  {ansNumber[index]}
                </Col>
                <Col className={styles.answer}>{decoder(answer.answer)}</Col>
              </Row>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Answers;
