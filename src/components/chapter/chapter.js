import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ChapterContext } from "../../contexts/chapterContext";

import Navbar from "../navbar";
import QuestionColumn from "./questionColumn";
import QuestionCards from "./questionCards";
import Congrats from "./congrats";

const Chapter = ({ history }) => {
  const {
    initChapter,
    chapterName,
    currentQuestion,
    next,
    showCongrats,
    action,
  } = useContext(ChapterContext);

  let { chapterId } = useParams();

  useEffect(() => {
    console.log("here");
    initChapter(chapterId);
  }, [chapterId]);

  return currentQuestion ? (
    <div className="chapter">
      <Navbar title={chapterName} exit={true} />
      <div className="chapter-inner">
        {showCongrats ? (
          <Congrats />
        ) : currentQuestion.type == "question-column" ? (
          <QuestionColumn />
        ) : null}
      </div>
      <div className="button-next-container">
        <div
          className="button-next"
          onClick={
            action == "Next chapter"
              ? () => history.push("/chapter/" + (parseInt(chapterId) + 1))
              : next
          }
        >
          {action}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Chapter;
