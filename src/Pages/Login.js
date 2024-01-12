import React, { useContext } from "react";
import MainButton from "../Components/MainButton";
import { Container, Row } from "react-bootstrap";

import styles from "../Styles/Pages/Login.module.css";
import { ApiCtx } from "../Context/ApiProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(ApiCtx);

  const InputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLoginData({ ...loginData, [name]: value });
    localStorage.setItem(name, value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/main`);
  };

  return (
    <div className={styles.loginMainPage}>
      <Container className={styles.loginPageContainer}>
        <Row>
          <h1 className={styles.loginPageHeader}>
            Welcome To <span>R</span>APIDTEST
          </h1>
        </Row>
        <form onSubmit={onSubmitHandler}>
          <Row>
            <div className={styles.loginUserName}>
              <label htmlFor="userName">your name : </label>
              <input
                id="userName"
                type="username"
                onChange={InputHandler}
                name="name"
                required
                maxLength={15}
                minLength={5}
                placeholder="Enter Your Name"
              />
            </div>
          </Row>
          <Row>
            <div className={styles.loginGender}>
              <label>your gender : </label>
              <select onChange={InputHandler} name="gender" required>
                <option disabled selected>
                  Select Your Gender
                </option>
                <option value="male" className={styles.defaultOption}>
                  Male
                </option>
                <option value="female" className={styles.defaultOption}>
                  Female
                </option>
              </select>
            </div>
          </Row>
          <Row className={styles.loginStartButton}>
            <MainButton text="Start Your Quiz" style="start" />
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Login;
