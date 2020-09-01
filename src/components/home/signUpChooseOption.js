import React, { useContext, useEffect } from "react";
import { Link, useHistory, Route } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

const SignUpChooseOption = () => {
  const history = useHistory();
  const { setSignInScreen, setBackground } = useContext(UserContext);

  useEffect(() => {
    setBackground(false);
  }, []);

  return (
    <div className="signin-options">
      <div className="main-text">Welcome back.</div>
      <div className="signin-options-content">
        <div className="option">
          <img src={require("../../static/imgs/GoogleLogo.svg")} width="25" />
          <a className="option-text">Sign up with Google</a>
        </div>
        <div className="option">
          <img src={require("../../static/imgs/FBLogo.svg")} width="25" />
          <a className="option-text">Sign up with Facebook</a>
        </div>
        <Link to="/sign-up/email" className="option">
          <img src={require("../../static/imgs/MailLogo.svg")} width="25" />
          <a className="option-text">Sign up with email</a>
        </Link>
      </div>
    </div>
  );
};

export default SignUpChooseOption;
