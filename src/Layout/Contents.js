import React from "react";
import SubHeader from "./SubHeader";
import { Container, Row, Col } from "react-bootstrap";

import styles from "../Styles/Layouts/Content.module.css";
import QuestionsNumber from "../Components/QuestionsNumber";

const Contents = () => {
  return (
    <div className={styles.contentMain}>
      <Container>
        <Row>
          <SubHeader />
        </Row>
        <Row>
          <Col>
            <QuestionsNumber />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contents;
