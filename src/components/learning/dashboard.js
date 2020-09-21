import React, { useContext, useEffect } from "react";

import img1 from "../../static/imgs/imgplaceholder1.svg";
import img2 from "../../static/imgs/imgplaceholder2.svg";
import img3 from "../../static/imgs/imgplaceholder3.svg";

import { useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";
import { LearningContext } from "../../contexts/learningContext";
import Navbar from "../navbar";

const Dashboard = () => {
  const history = useHistory();
  const { getChapters, chapters } = useContext(LearningContext);

  useEffect(() => {
    getChapters();
  }, []);

  return (
    <div className="dashboard">
      <Navbar title={"Chapter Menu"} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="croods">
            <img src={require("../../static/imgs/CroodsSitting.svg")} />
          </div>
          <div className="title">Choose a chapter to attempt the quiz.</div>
        </div>
        <div className="dashboard-chapters">
          {chapters.map((item, i) => (
            <div
              key={i}
              className="dashboard-chapter"
              onClick={() => {
                history.push({
                  pathname: "/chapter/" + item.chapter_number,
                  state: { chapter: item },
                });
              }}
            >
              <div className="img">
                <img src={item.image} />
              </div>
              <div className="number">
                <div>{i + 1}</div>
              </div>
              <div className="about">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
