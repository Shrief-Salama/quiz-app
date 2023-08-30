import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/Counter.module.css";

const Counter = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className={styles.clockMain}>30:45</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
