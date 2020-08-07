import React, { useContext, useState } from "react";

import { ChapterContext } from "../contexts/chapterContext";

const QuestionColumn = () => {
  const { currentQuestion, isAnswerGiven, givenAnswer, setAnswer } = useContext(
    ChapterContext
  );
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const correctAnswer = currentQuestion.correct;

  return (
    <div className="question-column">
      <div className="question">Q. {currentQuestion.question}</div>
      <div className="answers">
        {currentQuestion.answers.map((answer, i) => (
          <div
            key={i}
            className={
              "answer " +
              (isAnswerGiven && answer == correctAnswer ? "correct " : "") +
              (isAnswerGiven && answer == givenAnswer && answer != correctAnswer
                ? "incorrect "
                : "") +
              (givenAnswer == answer ? "highlight" : "")
            }
            onClick={() => setAnswer(answer)}
          >
            <span className="letter">{alphabet[i]}</span> :{" "}
            <span className="text">{answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionColumn;
