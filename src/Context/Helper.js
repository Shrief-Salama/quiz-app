import React, { createContext, useState } from "react";

export const AppHelper = createContext();

const HelperCtx = ({ children }) => {
  const [minCounter, setMinCounter] = useState(60);
  const [secCounter, setSecCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <AppHelper.Provider
      value={{
        minCounter,
        secCounter,
        setMinCounter,
        setSecCounter,
        setIsActive,
        isActive,
      }}
    >
      {children}
    </AppHelper.Provider>
  );
};

export default HelperCtx;
