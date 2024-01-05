import React, { useContext } from "react";

import styles from "../Styles/Components/QuestionsContents.module.css";

import { Container } from "react-bootstrap";
import QuestionsActions from "./QuestionsActions";
import Questions from "./Questions";
import Answers from "./Answers";
import { ApiCtx } from "../Context/ApiProvider";

const QuestionsContents = () => {
  const { singleQuestion, currentQuestion } = useContext(ApiCtx);

  return (
    <section className={styles.questionContentMain}>
      <Container>
        <div>
          <Questions
            singleQuestion={singleQuestion}
            currentQuestion={currentQuestion}
          />
        </div>
        <div>
          <Answers singleQuestion={singleQuestion} />
        </div>
        <div>
          <QuestionsActions />
        </div>
      </Container>
    </section>
  );
};

export default QuestionsContents;
