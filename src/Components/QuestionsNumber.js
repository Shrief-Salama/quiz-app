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
    const questionsAnswered = Object.keys(markedAnswer).includes(`${index}`);
    const questionsSkipped = skippedQuestions.includes(`${index}`);
    const questionsMarked = checkedQuestion.includes(index);

    if (questionsAnswered && !questionsMarked) {
      return styles.QuestionNumberAnswered;
    } else if (questionsSkipped && !questionsMarked) {
      return styles.QuestionNumberSkipped;
    } else if (questionsMarked && !questionsSkipped && !questionsAnswered) {
      return styles.QuestionNumberMarked;
    } else if (questionsMarked && questionsAnswered) {
      return styles.QuestionNumberMarkedAndAnswered;
    } else if (questionsMarked && questionsSkipped) {
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
