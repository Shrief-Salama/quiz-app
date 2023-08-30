import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiHumanTarget } from "react-icons/gi";

import styles from "../Styles/Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className={styles.logoMain}>
            <GiHumanTarget className={styles.logoIcon} />
            <p className={styles.logoName}>rapidtest</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Logo;
