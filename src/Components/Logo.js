import React from "react";

import { GiHumanTarget } from "react-icons/gi";

import styles from "../Styles/Components/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoMain}>
      <GiHumanTarget className={styles.logoIcon} />
      <p className={styles.logoName}>rapidtest</p>
    </div>
  );
};

export default Logo;
