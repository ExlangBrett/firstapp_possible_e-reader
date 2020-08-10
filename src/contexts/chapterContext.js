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
  const [action, setAction] = useState("Next");

  const initChapter = (id) => {
    setChapter(id);
    if (id == "1") {
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
    } else {
      setChapterName("Chapter 2");
      setQuestions([
        {
          type: "question-column",
          question: "What is a maniacal in Chinese?",
          answers: ["人性", "狂热", "道德", "巴莱", "I don't know"],
          correct: "狂热",
        },
        {
          type: "question-column",
          question: "What is trend in Chinese?",
          answers: ["人性", "道德", "巴莱", "潮流", "I don't know"],
          correct: "潮流",
        },
      ]);
    }
  };

  const setChapter = (id) => {
    setChapterId(id);
    // this data will be fetched from backend
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
      if (givenAnswer !== "") {
        setIsAnswerGiven(true);
      }
    } else {
      // go to next question
      setIsAnswerGiven(false);
      setGivenAnswer("");
      if (questions.length > currentQuestionNumber + 1) {
        setCurrentQuestion(questions[currentQuestionNumber + 1]);
        setCurrentQuestionNumber(currentQuestionNumber + 1);
      } else {
        // end chapter show final note
        setShowCongrats(true);
        setAction("Next chapter");
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
        action,
      }}
    >
      {props.children}
    </ChapterContext.Provider>
  );
};

export default ChapterContextProvider;
