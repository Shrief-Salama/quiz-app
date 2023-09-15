import React, { useContext } from "react";

import styles from "../Styles/Components/QuestionsContents.module.css";

import { Container, Row } from "react-bootstrap";
import QuestionsActions from "./QuestionsActions";
import Questions from "./Questions";
import Answers from "./Answers";

const QuestionsContents = () => {
  return (
    <div className={styles.questionContentMain}>
      <Container>
        <Row>
          <Questions />
        </Row>
        <Row>
          <Answers />
        </Row>
        <Row>
          <QuestionsActions />
        </Row>
      </Container>
    </div>
  );
};

export default QuestionsContents;
