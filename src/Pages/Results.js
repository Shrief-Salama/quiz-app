import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/Pages/Results.module.css";
import ResultBox from "../Components/ResultBox";

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
                <ResultBox
                  name={"Questions"}
                  value={localStorage.getItem("questions")}
                  className={styles.resultsQuestionsLength}
                />
                <ResultBox
                  name={"Answered"}
                  value={localStorage.getItem("answered")}
                  className={styles.resultsQuestionsAnswered}
                />
                <ResultBox
                  name={"Skipped"}
                  value={localStorage.getItem("skipped")}
                  className={styles.resultsQuestionsSkipped}
                />
                <ResultBox
                  name={"Marked For Review"}
                  value={localStorage.getItem("markedForReview")}
                  className={styles.resultsQuestionsMarked}
                />
                <ResultBox
                  name={"Correct Answers"}
                  value={localStorage.getItem("correctAnswers")}
                  className={styles.resultsQuestionsCorrectAnswers}
                />
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
              <div className={styles.resultMessage}>
                {dynamicFinalResults > 50 ? (
                  <p className={styles.resultSuccess}>
                    Congratulation, You Passed The Quiz
                  </p>
                ) : (
                  <p className={styles.resultFailed}>Sorry, You Have Failed</p>
                )}
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Results;
