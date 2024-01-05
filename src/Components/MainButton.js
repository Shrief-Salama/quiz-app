import React from "react";

import styles from "../Styles/Components/MainButton.module.css";

const MainButton = ({
  style,
  handleClick,
  text,
  disabled,
  onSubmit,
  submit,
}) => {
  const mapStyle = {
    start: styles.startBtn,
    finish: styles.finishBtn,
    nextPrev: styles.nextPrevBtn,
  };

  const btnStyle = mapStyle[style] || "";

  return (
    <button
      type={submit}
      className={btnStyle}
      onClick={handleClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default MainButton;
