import React from "react";

import styles from "../Styles/Components/QuestionsNumber.module.css";
import { Container, Row } from "react-bootstrap";

const QuestionsNumber = () => {
  return (
    <div className={styles.QuestNumberMain}>
      <Container>
        <Row>
          <p className={styles.QuestNumberTitle}>Questions</p>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default QuestionsNumber;
