import React, { createContext, useState, useEffect } from "react";

export const ChapterContext = createContext();

const ChapterContextProvider = (props) => {
  const [chapterId, setChapterId] = useState();
  const [questions, setQuestions] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [isAnswerGiven, setIsAnswerGiven] = useState(false);
  const [givenAnswer, setGivenAnswer] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);

  const initChapter = (id) => {
    setChapterId(id);
    // this data will be fetched from backend
    setChapterName("Chapter 1");
    setQuestions([
      {
        type: "question-column",
        question: "How do you pronounce 狂热？",
        answers: [
          "kuang2re4",
          "ba3lai2",
          "dao4de2",
          "ren2xing4",
          "I don't know",
        ],
        correct: "kuang2re4",
      },
      {
        type: "question-column",
        question: "How do you pronounce 潮流？",
        answers: [
          "ba3lai2",
          "dao4de2",
          "chao2liu2",
          "ren2xing4",
          "I don't know",
        ],
        correct: "chao2liu2",
      },
    ]);
  };

  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, [questions]);

  const setAnswer = (answer) => {
    if (!isAnswerGiven) {
      setGivenAnswer(answer);
    }
  };

  const next = () => {
    if (!isAnswerGiven) {
      setIsAnswerGiven(true);
    } else {
      // go to next question
      setIsAnswerGiven(false);
      if (questions.length > currentQuestionNumber + 1) {
        setCurrentQuestion(questions[currentQuestionNumber + 1]);
        setCurrentQuestionNumber(currentQuestionNumber + 1);
      } else {
        // end chapter show final note
        setShowCongrats(true);
      }
    }
  };

  return (
    <ChapterContext.Provider
      value={{
        initChapter,
        chapterName,
        currentQuestion,
        isAnswerGiven,
        givenAnswer,
        setAnswer,
        next,
        showCongrats,
      }}
    >
      {props.children}
    </ChapterContext.Provider>
  );
};

export default ChapterContextProvider;
