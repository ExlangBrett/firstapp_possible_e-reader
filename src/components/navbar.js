import React from "react";

const Navbar = ({ title }) => {
  return (
    <div className="nav">
      <div className="placeholder"></div>
      <div className="title">{title}</div>
      <div className="name-container ">
        <div className="name">JJ</div>
      </div>
    </div>
  );
};

export default Navbar;
