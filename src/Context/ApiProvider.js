import React, { createContext, useState } from "react";

export const ApiCtx = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const fixedData = data[currentQuestion];

  return (
    <ApiCtx.Provider
      value={{ data, setData, setCurrentQuestion, currentQuestion, fixedData }}
    >
      {children}
    </ApiCtx.Provider>
  );
};

export default ApiProvider;
