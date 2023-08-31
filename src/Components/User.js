import React from "react";

import { GrUser } from "react-icons/gr";
import { GrUserFemale } from "react-icons/gr";

import styles from "../Styles/Components/User.module.css";

const User = () => {
  return (
    <div className={styles.userMain}>
      <GrUser className={styles.userIcon} />
      <p className={styles.userName}>Shrief Salama</p>
    </div>
  );
};

export default User;
