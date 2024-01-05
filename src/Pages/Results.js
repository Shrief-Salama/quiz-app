import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/Pages/Results.module.css";

const Results = () => {
  const dynamicFinalResults = (
    (+localStorage.getItem("correctAnswers") /
      +localStorage.getItem("questions")) *
    100
  ).toFixed(0);

  return (
    <div className={styles.resultsMainPage}>
      <Container>
        <div className={styles.resultsBox}>
          <Row className={styles.resultsTitle}>Results</Row>
          <div className={styles.results}>
            <Col className={styles.resultsDetails}>
              <div className={styles.resultsContent}>
                <div className={styles.resultsQuestionsTitle}>
                  <div className={styles.resultsQuestionContent}>
                    <p>Questions :</p>
                    <span className={styles.resultsQuestionsLength}>
                      {localStorage.getItem("questions")}
                    </span>
                  </div>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <div className={styles.resultsQuestionContent}>
                    <p>Answered :</p>
                    <span className={styles.resultsQuestionsAnswered}>
                      {localStorage.getItem("answered")}
                    </span>
                  </div>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <div className={styles.resultsQuestionContent}>
                    <p>Skipped : </p>
                    <span className={styles.resultsQuestionsSkipped}>
                      {localStorage.getItem("skipped")}
                    </span>
                  </div>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <div className={styles.resultsQuestionContent}>
                    <p>Marked For Review :</p>
                    <span className={styles.resultsQuestionsMarked}>
                      {localStorage.getItem("markedForReview")}
                    </span>
                  </div>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <div className={styles.resultsQuestionContent}>
                    <p>Correct Answers :</p>
                    <span className={styles.resultsQuestionsCorrectAnswers}>
                      {localStorage.getItem("correctAnswers")}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles.resultsFinalContent}>
                <div className={styles.resultsQuestionsTitle}>
                  <p>Final Results</p>
                </div>
                <div className={styles.finalResultsPercentage}>
                  <p
                    className={
                      dynamicFinalResults > 50
                        ? styles.finalResultsPercentageContentSuccess
                        : styles.finalResultsPercentageContentFailed
                    }
                  >
                    {dynamicFinalResults}%
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Results;
