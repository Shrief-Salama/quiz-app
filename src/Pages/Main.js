import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Layout/Header";

import styles from "../Styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
