import React, { useContext, useEffect } from "react";

import styles from "../Styles/Components/Counter.module.css";
import { AppHelper } from "../Context/Helper";

const Counter = () => {
  const { secCounter, setSecCounter, minCounter, setMinCounter } =
    useContext(AppHelper);

  const format = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  useEffect(() => {
    const secAndMinHandler = setInterval(() => {
      if (secCounter === 0 && minCounter === 0) {
        clearInterval(secAndMinHandler);
      } else {
        if (secCounter === 0) {
          setMinCounter(minCounter - 1);
          setSecCounter(59);
        } else {
          setSecCounter(secCounter - 1);
        }
      }
    }, 1000);

    return () => clearInterval(secAndMinHandler);
  }, [setSecCounter, setMinCounter, secCounter, minCounter]);

  return (
    <div>
      <p className={styles.clockMain}>
        {format(minCounter)}:{format(secCounter)}
      </p>
    </div>
  );
};

export default Counter;
