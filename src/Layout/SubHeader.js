import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/Layouts/SubHeader.module.css";
import MainButton from "../Components/MainButton";
import { ApiCtx } from "../Context/ApiProvider";
import { useNavigate } from "react-router-dom";

const SubHeader = () => {
  const {
    data,
    markedAnswer,
    skippedQuestions,
    checkedQuestion,
    correctAnswers,
  } = useContext(ApiCtx);

  const navigate = useNavigate();

  const format = (number) => {
    if (number < 10 && number !== 0) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    navigate(`/results`);
    localStorage.setItem("questions", format(data.length));
    localStorage.setItem("answered", format(Object.keys(markedAnswer).length));
    localStorage.setItem("skipped", format(skippedQuestions.length));
    localStorage.setItem("markedForReview", format(checkedQuestion.length));
    localStorage.setItem(
      "correctAnswers",
      format(Object.keys(correctAnswers).length)
    );
  };

  return (
    <div className={styles.mainSubHeader}>
      <Container>
        <Row className={styles.subHeaderContents}>
          <Col xs={4} className={styles.testPlace}>
            <p>Stanford University, Stanford.</p>
          </Col>
          <Col className={styles.testInfo}>
            <p>
              Questions:
              <span className={styles.questionsNumber}>{data.length}</span>
            </p>
            <p>
              Answered:
              <span className={styles.questionsAnswered}>
                {format(Object.keys(markedAnswer).length)}
              </span>
            </p>
            <p>
              Mark For Review:
              <span className={styles.questionsReview}>
                {format(checkedQuestion.length)}
              </span>
            </p>
            <p>
              Skipped:
              <span className={styles.questionsSkipped}>
                {format(skippedQuestions.length)}
              </span>
            </p>
          </Col>
          <Col xs={2} className={styles.subHeaderBtn}>
            <MainButton
              text="Finish"
              style="finish"
              handleClick={onClickHandler}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubHeader;
