import React from "react";

import { GiHumanTarget } from "react-icons/gi";

import styles from "../Styles/Components/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoMain}>
      <GiHumanTarget className={styles.logoIcon} />
      <span className={styles.logoName}>rapidtest</span>
    </div>
  );
};

export default Logo;
