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
  const { getConcepts, mainConcepts, subConcepts } = useContext(
    LearningContext
  );

  useEffect(() => {
    getConcepts();
  }, []);

  return (
    <div className="dashboard">
      <Navbar title={"Main Concepts Menu"} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="croods">
            <img src={require("../../static/imgs/CroodsSitting.svg")} />
          </div>
          <div className="title">Choose a concept to attempt the quiz.</div>
        </div>
        <div className="dashboard-chapters">
          {mainConcepts.map((item, i) => (
            <div
              key={i}
              className="dashboard-chapter"
              onClick={() => {
                history.push({
                  pathname: "/concept/" + item["sc.id"],
                  state: { chapter: item },
                });
              }}
            >
              <div className="img">{/* <img src={} /> */}</div>
              <div className="number">
                <div>{i + 1}</div>
              </div>
              <div className="about">
                <div className="title">type: {item.type}</div>
                <div className="description">
                  {subConcepts.map((sub, i) => {
                    if (sub.main_concept_id == item.id) {
                      return (
                        <span key={i}>
                          {"   "}
                          {sub.body}
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
