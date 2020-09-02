import React from "react";

const LogoHeader = () => {
  return (
    <div className="logo-header">
      <div className="logo">
        <img src={require("../static/imgs/logo.svg")} />
      </div>
      <div className="text">
        <img src={require("../static/imgs/logotext.svg")} />
      </div>
    </div>
  );
};

export default LogoHeader;
