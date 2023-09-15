import React from "react";

import styles from "../Styles/Components/MainButton.module.css";

const MainButton = ({ style, handleClick, text, disabled }) => {
  let btnStyle = style;
  if (style === "start") {
    btnStyle = `${styles.startBtn}`;
  } else if (style === "finish") {
    btnStyle = `${styles.finishBtn}`;
  } else if (style === "nextPrev") {
    btnStyle = `${styles.nextPrevBtn}`;
  }

  return (
    <div>
      <button className={btnStyle} onClick={handleClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default MainButton;
