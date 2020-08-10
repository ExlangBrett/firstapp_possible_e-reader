import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = ({ title }) => {
  const history = useHistory();
  return (
    <div className="nav">
      <div className="exit" onClick={() => history.push("/dashboard")}>
        <div className="exit-inner">X</div>
      </div>
      <div className="title">{title}</div>
      <div className="name-container ">
        <div className="name">JJ</div>
      </div>
    </div>
  );
};

export default Navbar;
