import React, { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "../contexts/userContext";

export const LearningContext = createContext();

const LearningContextProvider = (props) => {
  const { setLoading } = useContext(UserContext);
  const api = "https://lessons.exlanguage.com";
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const callApi = async (url, method, body) => {
    const res = await fetch(api + url, {
      method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + localStorage.getItem("idToken"),
      },
      body: JSON.stringify(body),
    });
    const { message, data } = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      console.log("error", message);
    }
  };

  const getChapters = async () => {
    setLoading(true);
    const data = await callApi("/get-chapters", "POST", {});
    console.log(data);
    setChapters(data);
    setLoading(false);
  };

  const chooseChapter = async (chapterId) => {
    setLoading(true);
    const data = await callApi("/get-chapter", "POST", {
      chapter_id: chapterId,
    });
    setChapter(data["chapter"][0]);
    setQuestions(data["questions"]);
    setCurrentQuestion(data["questions"][0]);
    setAnswers(JSON.parse(data["questions"][0].answers));
    setLoading(false);
  };

  return (
    <LearningContext.Provider
      value={{
        getChapters,
        chapters,
        chooseChapter,
        questions,
        currentQuestion,
        setChapter,
        answers,
        chapter,
        callApi,
      }}
    >
      {props.children}
    </LearningContext.Provider>
  );
};

export default LearningContextProvider;
