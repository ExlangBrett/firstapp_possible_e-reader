import React from "react";
import chapterImage from "../static/imgs/img.svg";
import lock from "../static/imgs/lock.svg";

import { useHistory } from "react-router-dom";

import Navbar from "./navbar";

const Dashboard = () => {
  const history = useHistory();

  const chapters = [
    { id: "1", name: "Chapter 1", image: chapterImage },
    { id: "2", name: "Chapter 2", image: lock },
    { id: "3", name: "Chapter 3", image: lock },
    { id: "4", name: "Chapter 4", image: lock },
    { id: "5", name: "Chapter 5", image: lock },
  ];

  return (
    <div className="dashboard">
      <Navbar title={"Chapters"} />
      <div className="chapters">
        {chapters.map((item) => (
          <div key={item.name} className="chapter-container">
            <div
              className={
                item.image == lock ? "chapter chapter-inactive" : "chapter"
              }
              onClick={
                item.image == lock
                  ? null
                  : () => history.push("/chapter/" + item.id)
              }
            >
              <div>
                <img src={item.image} className="image" />
              </div>
              <div className="chapter-name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
