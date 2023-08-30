import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrUser } from "react-icons/gr";
import { GrUserFemale } from "react-icons/gr";

import styles from "../Styles/User.module.css";

const User = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className={styles.userMain}>
            <GrUser className={styles.userIcon} />
            <p className={styles.userName}>Shrief Salama</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default User;
