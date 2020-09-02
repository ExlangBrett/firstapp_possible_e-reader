import React, { useContext, useState } from "react";
import { Link, useHistory, Route } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import LogoHeader from "../logoHeader";
import SignInChooseOption from "./signin/signInChooseOption";
import SignInEmail from "./signin/signInEmail";
import SignInForgottenPassword from "./signin/signInForgottenPassword";
import SignUpChooseOption from "./signup/signUpChooseOption";
import SignUpEmail from "./signup/signUpEmail";

const BottomTextSignIn = () => {
  return (
    <div>
      Don't have an account? <Link to="/sign-up">Sign up</Link>.
    </div>
  );
};

const BottomTextSignUp = () => {
  return (
    <div>
      Already have an account? <Link to="/sign-in">Sign in</Link>.
    </div>
  );
};

const AuthBase = ({ match }) => {
  const {
    signIn,
    signInError,
    signInConfirmed,
    restoreSignIn,
    signInScreen,
    setSignInScreen,
    background,
    setBackground,
  } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <div className="auth-base">
      <div className="header">
        <LogoHeader />
      </div>
      <div className="auth-base-content">
        <div className={background ? "main background" : "main"}>
          <Route exact path={"/sign-in"} component={SignInChooseOption} />
          <Route path={"/sign-in/email"} component={SignInEmail} />
          <Route
            path={"/sign-in/forgotten-password"}
            component={SignInForgottenPassword}
          />
          <Route exact path={"/sign-up"} component={SignUpChooseOption} />
          <Route path={"/sign-up/email"} component={SignUpEmail} />
        </div>
        <div className="bottom-text">
          <Route path={"/sign-in"} component={BottomTextSignIn} />
          <Route path={"/sign-up"} component={BottomTextSignUp} />
        </div>
      </div>
      <div className="footer">
        By creating an account, I accept the Terms of Service of Experience
        Language.
      </div>
    </div>
  );
};

export default AuthBase;
