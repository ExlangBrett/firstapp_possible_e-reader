import React, { useState } from "react";

import Navbar from "../navbar";

const Chapter = () => {
  const [answerGiven, setAnswerGiven] = useState(false);
  const answers = [
    "T-Rex didn't like him",
    "T-Rex coundn't afford him",
    "Brachiosaurus couldn't travel",
    "Brachiosaurus was a spy",
  ];

  return (
    <div className="chapter">
      <Navbar title={"Ch1 Quiz"} exit={true} />
      <div className="chapter-content">
        <div className="chapter-description">
          <div>Q1 of 10</div>
          <div>Chapter 1 Title May Appear Here</div>
        </div>
        <div className="chapter-question">
          In 30116 BC, why did the senior T-Rex not hire a Brachiosaurus as his
          personal secretary?
        </div>
        <div className="chapter-answers">
          {answers.map((answer, i) => (
            <div className="answer" key={i}>
              {answer}
            </div>
          ))}
        </div>
        <div className="elipse">
          <img src={require("../../static/imgs/elipse.svg")} />
        </div>
        <div className="submit-button">
          <div className={answerGiven ? "active" : "not-active"}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
