import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Layout/Header";

import styles from "../Styles/Pages/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <div className={styles.bottomBorderInside}></div>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
