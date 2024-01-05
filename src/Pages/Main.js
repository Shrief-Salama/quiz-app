import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Layout/Header";
import Contents from "../Layout/Contents";

import styles from "../Styles/Pages/Main.module.css";
import HelperCtx from "../Context/Helper";
import ProgressBar from "../Components/ProgressBar";

const Main = () => {
  return (
    <HelperCtx>
      <div className={styles.main}>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <ProgressBar />
          </Row>
          <Row>
            <Contents />
          </Row>
        </Container>
      </div>
    </HelperCtx>
  );
};

export default Main;
