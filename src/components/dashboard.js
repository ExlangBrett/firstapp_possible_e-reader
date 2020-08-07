import React from "react";
import chapterImage from "../static/imgs/img.svg";
import lock from "../static/imgs/lock.svg";

import Navbar from "./navbar";

const Dashboard = () => {
  const chapters = [
    { name: "Chapter 1", image: chapterImage },
    { name: "Chapter 2", image: lock },
    { name: "Chapter 3", image: lock },
    { name: "Chapter 4", image: lock },
    { name: "Chapter 5", image: lock },
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
