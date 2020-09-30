import React, { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "../contexts/userContext";

export const LearningContext = createContext();

const LearningContextProvider = (props) => {
  const { setLoading } = useContext(UserContext);
  // const api = "https://lessons.exlanguage.com";
  const api = "http://localhost:3000";
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [mainConcepts, setMainConcepts] = useState([]);
  const [subConcepts, setSubConcepts] = useState([]);

  const callApi = async (url, method, body) => {
    const res = await fetch(api + url, {
      method,
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      //   Authorization: "Bearer " + localStorage.getItem("idToken"),
      // },
      body: JSON.stringify(body),
    });
    const { message, data } = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      console.log("error", message);
    }
  };

  const getConcepts = async () => {
    setLoading(true);
    const data = await callApi("/get-concepts", "POST", {});
    console.log(data);
    setMainConcepts(data["main_concepts"]);
    setSubConcepts(data["sub_concepts"]);
    setLoading(false);
  };

  const getConcept = async () => {
    setLoading(true);
    const data = await callApi("/get-concept", "POST", {
      conceptId: 14,
    });
    console.log(data);
    setQuestions(data["questions"]);
    setCurrentQuestion(data["questions"][0]);
    setAnswers(data["questions"][0]["answers"]);
    setQuestions(data["questions"][0]["question"]);
    setLoading(false);
  };

  const updateUserSubStats = async (subConceptId, toUpdate) => {
    setLoading(true);
    const data = await callApi("/update-user-sub-stats", "POST", {
      subConceptId,
      toUpdate,
    });
    console.log(data);
    setLoading(false);
  };

  return (
    <LearningContext.Provider
      value={{
        questions,
        currentQuestion,
        question,
        answers,
        getConcepts,
        getConcept,
        mainConcepts,
        subConcepts,
        updateUserSubStats,
      }}
    >
      {props.children}
    </LearningContext.Provider>
  );
};

export default LearningContextProvider;
