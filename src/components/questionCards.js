import React from "react";

const QuestionColumn = ({ question, answers }) => {
  return (
    <div className="question-cards">
      <div className="question">Q. </div>
      <div className="answers">
        {question.answers.map((answer, i) => (
          <div key={i} className="answer">
            <span className="text">{answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionColumn;
