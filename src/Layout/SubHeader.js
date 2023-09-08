import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/Layouts/SubHeader.module.css";
import MainButton from "../Components/MainButton";

const SubHeader = () => {
  return (
    <div className={styles.mainSubHeader}>
      <Container>
        <Row className={styles.subHeaderContents}>
          <Col xs={4} className={styles.testPlace}>
            <p>Stanford University, Stanford.</p>
          </Col>
          <Col className={styles.testInfo}>
            <p>
              Questions:<span className={styles.questionsNumber}>24</span>
            </p>
            <p>
              Answered:<span className={styles.questionsAnswered}>20</span>
            </p>
            <p>
              Mark For Review:
              <span className={styles.questionsReview}>07</span>
            </p>
            <p>
              Skipped:<span className={styles.questionsSkipped}>06</span>
            </p>
          </Col>
          <Col xs={2} className={styles.subHeaderBtn}>
            <MainButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubHeader;
