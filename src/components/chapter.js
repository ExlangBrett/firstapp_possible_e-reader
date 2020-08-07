import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ChapterContext } from "../contexts/chapterContext";

import Navbar from "./navbar";
import QuestionColumn from "./questionColumn";
import QuestionCards from "./questionCards";
import Congrats from "./congrats";

const Chapter = () => {
  const {
    initChapter,
    chapterName,
    currentQuestion,
    next,
    showCongrats,
  } = useContext(ChapterContext);

  let { chapterId } = useParams();

  useEffect(() => {
    initChapter(chapterId);
  }, []);

  return currentQuestion ? (
    <div className="chapter">
      <Navbar title={chapterName} />
      <div className="chapter-inner">
        {showCongrats ? (
          <Congrats />
        ) : currentQuestion.type == "question-column" ? (
          <QuestionColumn />
        ) : null}
      </div>
      <div className="button-next-container">
        <div className="button-next" onClick={next}>
          Next
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Chapter;
