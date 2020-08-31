import React from "react";

import congrats from "../../static/imgs/congrats.svg";

const Congrats = () => {
  return (
    <div className="congrats">
      <div className="image">
        <img src={congrats} className="image" />
      </div>
      <div className="text">
        Congrats *name*, you’ve learned all the vocabularly for chapter 1!
        <br />
        <br />
        Now it is time to read chapter 2.
      </div>
    </div>
  );
};

export default Congrats;
