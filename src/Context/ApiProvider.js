import React, { createContext, useState } from "react";

export const ApiCtx = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedAnswer, setMarkedAnswers] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [showedQuestion, setShowedQuestion] = useState({ 0: 0 });
  const [checkedQuestion, setCheckedQuestion] = useState([]);
  const [loginData, setLoginData] = useState({ name: "", gender: "" });
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const singleQuestion = data[currentQuestion];

  return (
    <ApiCtx.Provider
      value={{
        data,
        setData,
        setCurrentQuestion,
        currentQuestion,
        singleQuestion,
        setMarkedAnswers,
        markedAnswer,
        setSkippedQuestions,
        skippedQuestions,
        setShowedQuestion,
        showedQuestion,
        checkedQuestion,
        setCheckedQuestion,
        setLoginData,
        loginData,
        correctAnswers,
        setCorrectAnswers,
      }}
    >
      {children}
    </ApiCtx.Provider>
  );
};

export default ApiProvider;
