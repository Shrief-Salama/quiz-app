import React, { useContext } from "react";

import styles from "../Styles/Components/QuestionsNumber.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { ApiCtx } from "../Context/ApiProvider";

const QuestionsNumber = () => {
  const { data } = useContext(ApiCtx);

  return (
    <div className={styles.QuestNumberMain}>
      <Container>
        <Row>
          <p className={styles.QuestNumberTitle}>Questions</p>
        </Row>
        <Row className={styles.QuestNumberRow}>
          {data.map((question, index) => (
            <Col key={index} className={styles.QuestionNumberCol}>
              <button className={styles.QuestionNumber}>{index + 1}</button>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default QuestionsNumber;
