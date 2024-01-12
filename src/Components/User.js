import React from "react";

import { GrUser } from "react-icons/gr";
import { GrUserFemale } from "react-icons/gr";

import styles from "../Styles/Components/User.module.css";

const User = () => {
  return (
    <div className={styles.userMain}>
      {localStorage.getItem("gender") === "male" ? (
        <GrUser className={styles.userIcon} />
      ) : (
        <GrUserFemale className={styles.userIcon} />
      )}

      <span className={styles.userName}>{localStorage.getItem("name")}</span>
    </div>
  );
};

export default User;
