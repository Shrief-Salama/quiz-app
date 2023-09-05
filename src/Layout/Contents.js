import React from "react";
import SubHeader from "./SubHeader";
import { Container, Row } from "react-bootstrap";

import styles from "../Styles/Layouts/Content.module.css";

const Contents = () => {
  return (
    <div className={styles.contentMain}>
      <Container>
        <Row>
          <SubHeader />
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Contents;
