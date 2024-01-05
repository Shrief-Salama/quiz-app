import React, { useContext } from "react";

import styles from "../Styles/Components/QuestionsNumber.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { ApiCtx } from "../Context/ApiProvider";

const QuestionsNumber = () => {
  const {
    data,
    setCurrentQuestion,
    showedQuestion,
    markedAnswer,
    skippedQuestions,
    setSkippedQuestions,
    checkedQuestion,
  } = useContext(ApiCtx);

  const onClickHandler = (index) => {
    setCurrentQuestion(index);

    const showedQuestionArray = Object.keys(showedQuestion);
    const markedAnswerArray = Object.keys(markedAnswer);

    setSkippedQuestions(
      showedQuestionArray.filter((item) => !markedAnswerArray.includes(item))
    );
  };

  const styleHandler = (index) => {
    if (
      Object.keys(markedAnswer).includes(`${index}`) &&
      !checkedQuestion.includes(index)
    ) {
      return styles.QuestionNumberAnswered;
    } else if (
      skippedQuestions.includes(`${index}`) &&
      !checkedQuestion.includes(index)
    ) {
      return styles.QuestionNumberSkipped;
    } else if (
      checkedQuestion.includes(index) &&
      !skippedQuestions.includes(`${index}`) &&
      !Object.keys(markedAnswer).includes(`${index}`)
    ) {
      return styles.QuestionNumberMarked;
    } else if (
      checkedQuestion.includes(index) &&
      Object.keys(markedAnswer).includes(`${index}`)
    ) {
      return styles.QuestionNumberMarkedAndAnswered;
    } else if (
      checkedQuestion.includes(index) &&
      skippedQuestions.includes(`${index}`)
    ) {
      return styles.QuestionNumberMarkedAndSkipped;
    } else {
      return styles.QuestionNumber;
    }
  };

  return (
    <div className={styles.QuestNumberMain}>
      <Container>
        <Row>
          <p className={styles.QuestNumberTitle}>Questions</p>
        </Row>
        <Row className={styles.QuestNumberRow}>
          {data.map((question, index) => (
            <Col key={index} className={styles.QuestionNumberCol}>
              <button
                className={styleHandler(index)}
                onClick={() => onClickHandler(index)}
                disabled={
                  Object.keys(showedQuestion).includes(`${index}`)
                    ? null
                    : "disabled"
                }
              >
                {index + 1}
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default QuestionsNumber;
