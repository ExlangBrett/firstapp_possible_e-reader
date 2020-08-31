import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import LogoHeader from "./logoHeader";
import SignInBase from "./signInBase";

const Home = () => {
  const { signOut, showTokens, signedIn } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className="home">
      <div className="header">
        <LogoHeader />
      </div>
      <div className="content">
        <SignInBase />
      </div>
      <div className="footer">
        By creating an account, I accept the Terms of Service of Experience
        Language.
      </div>
    </div>
  );
};

export default Home;
