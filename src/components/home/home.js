import React, { useContext } from "react";
import { Link, useHistory, Route } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import LogoHeader from "./logoHeader";
import AuthBase from "./authBase";

const Home = ({ match }) => {
  const { signOut, showTokens, signedIn } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className="home">
      <div className="header">
        <LogoHeader />
      </div>
      <div className="content">
        <Route path={"/sign-in"} component={AuthBase} />
        <Route path={"/sign-up"} component={AuthBase} />
      </div>
      <div className="footer">
        By creating an account, I accept the Terms of Service of Experience
        Language.
      </div>
    </div>
  );
};

export default Home;
