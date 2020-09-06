import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

const Navbar = ({ title, exit }) => {
  const history = useHistory();
  const { signOut, signedIn, name } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="menu" onClick={() => history.push("/dashboard")}>
        {exit ? (
          <div className="exit">
            <img src={require("../static/imgs/x.svg")} />
          </div>
        ) : (
          <div className="menu-inner">
            <img src={require("../static/imgs/menu.svg")} />
          </div>
        )}
      </div>
      <div className="title">{title}</div>
      <div className="person">
        <img src={require("../static/imgs/person.svg")} />
      </div>
    </div>
  );
};

export default Navbar;
