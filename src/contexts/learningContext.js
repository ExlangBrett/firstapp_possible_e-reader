import React, { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "../contexts/userContext";

export const LearningContext = createContext();

const LearningContextProvider = (props) => {
  const { setLoading } = useContext(UserContext);
  const api = "http://localhost:3000";
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const callApi = async (url, method, body) => {
    const res = await fetch(api + url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
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
    const data = callApi("/get-chapters", "POST", {});
    setChapters(data);
    setLoading(false);
  };

  const getChapter = async (chapterId) => {
    const res = await fetch(api + "/get-chapter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapter_id: chapterId,
      }),
    });
    const { message, data } = await res.json();
    if (res.status == 200) {
      setChapter(data[0]);
    } else {
      console.log("error", message);
    }
  };

  const getQuestions = async (chapterId) => {
    const res = await fetch(api + "/get-questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chapter_id: chapterId,
      }),
    });
    const { message, data } = await res.json();
    if (res.status == 200) {
      setQuestions(data);
      setCurrentQuestion(data[0]);
      setAnswers(JSON.parse(data[0].answers));
    } else {
      console.log("error", message);
    }
  };

  const chooseChapter = async (chapterId) => {
    const currChapter = getChapter(chapterId);
    const currQuestions = getQuestions(chapterId);
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
      }}
    >
      {props.children}
    </LearningContext.Provider>
  );
};

export default LearningContextProvider;
