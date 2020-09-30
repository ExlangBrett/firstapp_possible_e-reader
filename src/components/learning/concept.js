import React, { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

import Navbar from "../navbar";
import { LearningContext } from "../../contexts/learningContext";
import { UserContext } from "../../contexts/userContext";

const Concept = () => {
  const { setLoading } = useContext(UserContext);
  const location = useLocation();
  const {
    questions,
    currentQuestion,
    question,
    answers,
    getConcept,
    updateUserSubStats,
    questionsCount,
    currentQuestionNumber,
    nextQuestion,
  } = useContext(LearningContext);
  let params = useParams();

  useEffect(() => {
    getConcept(params.conceptId);
  }, []);

  const [answerGiven, setAnswerGiven] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const submitAnswer = async () => {
    if (answerGiven) {
      setAnswerSubmitted(true);
      if (answerGiven === currentQuestion.correct)
        updateUserSubStats(1, "correct_count");
      else updateUserSubStats(1, "wrong_count");
    }
  };

  const getNextQuestion = () => {
    setAnswerSubmitted(false);
    setAnswerGiven(false);
    nextQuestion();
  };

  return (
    <div className="chapter">
      <Navbar title={"Ch1 Quiz"} exit={true} />
      <div className="chapter-content">
        <div className="chapter-description">
          <div>{"Q" + currentQuestionNumber + " of " + questionsCount}</div>
          <div>Chapter 1 Title May Appear Here</div>
        </div>
        <div className="chapter-question">{question}</div>
        <div className="chapter-answers">
          {answers.map((answer, i) =>
            answerSubmitted ? (
              <div
                className={
                  currentQuestion.correct == answer
                    ? "answer correct"
                    : answerGiven == answer
                    ? "answer wrong"
                    : "answer"
                }
                key={i}
              >
                {answer}
              </div>
            ) : (
              <div
                className={
                  answerGiven == answer ? "answer highlighted" : "answer"
                }
                key={i}
                onClick={() => {
                  setAnswerGiven(answer);
                }}
              >
                {answer}
              </div>
            )
          )}
        </div>
        <div className="elipse">
          <img src={require("../../static/imgs/elipse.svg")} />
        </div>
        <div
          className="submit-button"
          onClick={() => {
            answerSubmitted ? getNextQuestion() : submitAnswer();
          }}
        >
          {answerSubmitted ? (
            <div className="active">Next Question</div>
          ) : (
            <div className={answerGiven ? "active" : "not-active"}>Submit</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Concept;
