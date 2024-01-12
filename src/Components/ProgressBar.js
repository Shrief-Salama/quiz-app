import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../Styles/Components/ProgressBar.module.css";
import { ApiCtx } from "../Context/ApiProvider";

const ProgressBar = () => {
  const { data, markedAnswer } = useContext(ApiCtx);

  const dynamicWidth = (Object.keys(markedAnswer).length / data.length) * 100;

  return (
    <div>
      <Container>
        <Row className={styles.progressBarMain}>
          <Col className={styles.progressBarContent}>
            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{ width: `${dynamicWidth}%` }}
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProgressBar;
