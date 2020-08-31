import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

const Navbar = ({ title, exit }) => {
  const history = useHistory();
  const { signOut, signedIn, name } = useContext(UserContext);

  return (
    <div className="nav">
      <div className="exit" onClick={() => history.push("/dashboard")}>
        {exit ? <div className="exit-inner">X</div> : null}
      </div>
      <div className="title">{title}</div>
      <div className="name-container ">
        <div className="name">{name.substring(0, 2).toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Navbar;
