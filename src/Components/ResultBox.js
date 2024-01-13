import React from "react";

import styles from "../Styles/Components/ResultBox.module.css";

const ResultBox = ({ name, value, className }) => {
  return (
    <div className={styles.resultsQuestionsTitle}>
      <p>{name} :</p>
      <span className={className}>{value}</span>
    </div>
  );
};

export default ResultBox;
