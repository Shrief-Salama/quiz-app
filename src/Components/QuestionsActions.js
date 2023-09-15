import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainButton from "./MainButton";

import styles from "../Styles/Components/QuestionActions.module.css";
import { ApiCtx } from "../Context/ApiProvider";

const QuestionsActions = () => {
  const { data, currentQuestion, setCurrentQuestion } = useContext(ApiCtx);

  const nextButtonHandler = () => {
    if (currentQuestion < data.length) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }
  };

  const prevButtonHandler = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((currentQuestion) => currentQuestion - 1);
    }
  };

  return (
    <div className={styles.questionsActionsMain}>
      <Container>
        <Row className={styles.questionsActionsRow}>
          <Col xs={7} className={styles.questionsMarkReview}>
            <input id="check" type="checkbox" />
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
