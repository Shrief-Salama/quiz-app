import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainButton from "./MainButton";

import styles from "../Styles/Components/QuestionActions.module.css";
import { ApiCtx } from "../Context/ApiProvider";

const QuestionsActions = () => {
  const {
    data,
    currentQuestion,
    setCurrentQuestion,
    markedAnswer,
    setSkippedQuestions,
    setShowedQuestion,
    showedQuestion,
    setCheckedQuestion,
    checkedQuestion,
  } = useContext(ApiCtx);

  const isMarked = checkedQuestion.includes(currentQuestion);

  const nextButtonHandler = () => {
    if (currentQuestion < data.length) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
      setShowedQuestion({
        ...showedQuestion,
        [currentQuestion + 1]: currentQuestion + 1,
      });
    }
    handleSkipped();
  };

  const prevButtonHandler = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((currentQuestion) => currentQuestion - 1);
    }
    handleSkipped();
  };

  const handleSkipped = () => {
    const showedQuestionArray = Object.keys(showedQuestion);
    const markedAnswerArray = Object.keys(markedAnswer);

    setSkippedQuestions(
      showedQuestionArray.filter((item) => !markedAnswerArray.includes(item))
    );
  };

  const checkHandler = (id) => {
    setCheckedQuestion((prevQuestion) => {
      const isChecked = prevQuestion.includes(id);
      if (isChecked) {
        return prevQuestion.filter((itemId) => itemId !== id);
      } else {
        return [...prevQuestion, id];
      }
    });
  };

  return (
    <div className={styles.questionsActionsMain}>
      <Container>
        <Row className={styles.questionsActionsRow}>
          <Col xs={7} className={styles.questionsMarkReview}>
            <input
              id={currentQuestion}
              type="checkbox"
              onChange={() => checkHandler(currentQuestion)}
              checked={isMarked}
            />
            <label htmlFor="check">Mark For Review</label>
          </Col>
          <Col>
            <MainButton
              text="< Previous"
              style="nextPrev"
              handleClick={prevButtonHandler}
              disabled={currentQuestion === 0}
            />
          </Col>
          <Col>
            <MainButton
              text="Next >"
              style="nextPrev"
              handleClick={nextButtonHandler}
              disabled={currentQuestion === data.length - 1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QuestionsActions;
