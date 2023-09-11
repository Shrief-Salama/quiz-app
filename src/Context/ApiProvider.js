import React, { createContext, useState } from "react";

export const ApiCtx = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <ApiCtx.Provider value={{ data, setData }}>{children}</ApiCtx.Provider>
  );
};

export default ApiProvider;
