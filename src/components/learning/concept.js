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
  } = useContext(LearningContext);
  let params = useParams();

  useEffect(() => {
    getConcept();
  }, []);

  const [answerGiven, setAnswerGiven] = useState(false);
  const [answerSubmited, setAnswerSubmited] = useState(false);

  const submitAnswer = async () => {
    if (answerGiven) {
      setAnswerSubmited(true);
      if (answerGiven === currentQuestion.correct)
        updateUserSubStats(1, "correct_count");
      else updateUserSubStats(1, "wrong_count");
    }
  };

  return (
    <div className="chapter">
      <Navbar title={"Ch1 Quiz"} exit={true} />
      <div className="chapter-content">
        <div className="chapter-description">
          <div>
            {/* {currentQuestion && chapter
              ? "Q" +
                currentQuestion.question_number +
                " of " +
                chapter.questions_count
              : null} */}
          </div>
          <div>Chapter 1 Title May Appear Here</div>
        </div>
        <div className="chapter-question">{question}</div>
        <div className="chapter-answers">
          {answers.map((answer, i) => (
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
          ))}
        </div>
        <div className="elipse">
          <img src={require("../../static/imgs/elipse.svg")} />
        </div>
        <div className="submit-button" onClick={() => submitAnswer()}>
          <div className={answerGiven ? "active" : "not-active"}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
