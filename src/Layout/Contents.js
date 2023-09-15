import React, { useContext, useEffect } from "react";
import SubHeader from "./SubHeader";
import { Container, Row, Col } from "react-bootstrap";

import styles from "../Styles/Layouts/Content.module.css";
import QuestionsNumber from "../Components/QuestionsNumber";
import { ApiCtx } from "../Context/ApiProvider";
import QuestionsContents from "../Components/QuestionsContents";

const Contents = () => {
  const { setData } = useContext(ApiCtx);

  useEffect(() => {
    const dataArr = async () => {
      try {
        await fetch(
          "https://opentdb.com/api.php?amount=24&category=18&difficulty=easy&type=multiple",
          { method: "GET" }
        ).then(async (res) => {
          const response = await res.json();
          setData(response.results);
          // setCurrentQuestion(response.results[1].question);
        });
      } catch (error) {
        console.log(error);
      }
    };
    dataArr();
  }, [setData]);

  return (
    <div className={styles.contentMain}>
      <Container>
        <Row>
          <SubHeader />
        </Row>
        <Row>
          <Col xs={3}>
            <QuestionsNumber />
          </Col>
          <Col>
            <QuestionsContents />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contents;
