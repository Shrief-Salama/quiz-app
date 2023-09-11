import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Layout/Header";
import Contents from "../Layout/Contents";

import styles from "../Styles/Pages/Main.module.css";
import ApiProvider from "../Context/ApiProvider";

const Main = () => {
  return (
    <ApiProvider>
      <div className={styles.main}>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <div className={styles.bottomBorderInside}></div>
          </Row>
          <Row>
            <Contents />
          </Row>
        </Container>
      </div>
    </ApiProvider>
  );
};

export default Main;
