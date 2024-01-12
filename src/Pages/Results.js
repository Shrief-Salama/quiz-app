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
                  <p>Questions :</p>
                  <span className={styles.resultsQuestionsLength}>
                    {localStorage.getItem("questions")}
                  </span>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <p>Answered :</p>
                  <span className={styles.resultsQuestionsAnswered}>
                    {localStorage.getItem("answered")}
                  </span>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <p>Skipped : </p>
                  <span className={styles.resultsQuestionsSkipped}>
                    {localStorage.getItem("skipped")}
                  </span>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <p>Marked For Review :</p>
                  <span className={styles.resultsQuestionsMarked}>
                    {localStorage.getItem("markedForReview")}
                  </span>
                </div>
                <div className={styles.resultsQuestionsTitle}>
                  <p>Correct Answers :</p>
                  <span className={styles.resultsQuestionsCorrectAnswers}>
                    {localStorage.getItem("correctAnswers")}
                  </span>
                </div>
              </div>
            </Col>
            <Col className={styles.resultsFinalContent}>
              <div className={styles.finalResultsTitle}>
                <p>Final Result</p>
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
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Results;
