import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Components/Logo";
import Counter from "../Components/Counter";
import User from "../Components/User";

import styles from "../Styles/Layouts/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerMain}>
      <Container>
        <Row className={styles.headerContent}>
          <Col>
            <Logo />
          </Col>
          <Col>
            <Counter />
          </Col>
          <Col>
            <User />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
