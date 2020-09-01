import React, { useContext, useState } from "react";
import { Link, useHistory, Route } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import SignInChooseOption from "./signInChooseOption";
import SignInEmail from "./signInEmail";
import SignInForgottenPassword from "./signInForgottenPassword";
import SignUpChooseOption from "./signUpChooseOption";
import SignUpEmail from "./signUpEmail";

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
      <div className={background ? "main background" : "main"}>
        <Route path={"/sign-in/choose-option"} component={SignInChooseOption} />
        <Route path={"/sign-in/email"} component={SignInEmail} />
        <Route
          path={"/sign-in/forgotten-password"}
          component={SignInForgottenPassword}
        />
        <Route path={"/sign-up/choose-option"} component={SignUpChooseOption} />
        <Route path={"/sign-up/email"} component={SignUpEmail} />
      </div>
      <div className="bottom-text">
        <div>
          Don't have an account?{" "}
          <Link to="/sign-up/choose-option">Sign up.</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthBase;
