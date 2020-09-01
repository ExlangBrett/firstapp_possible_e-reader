import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

import SignInChooseOption from "./signInChooseOption";
import SignInEmail from "./signInEmail";
import SignInForgottenPassword from "./signInForgottenPassword";

const SignInBase = () => {
  const { signIn, signInError, signInConfirmed, restoreSignIn } = useContext(
    UserContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [background, setBackground] = useState(true);
  const [screen, setScreen] = useState("signIn");

  const history = useHistory();

  return (
    <div className="signin-base">
      <div className={background ? "main background" : "main"}>
        {screen == "signInChooseOption" ? (
          <SignInChooseOption />
        ) : screen == "signIn" ? (
          <SignInEmail />
        ) : screen == "signInForgottenPassword" ? (
          <SignInForgottenPassword />
        ) : null}
      </div>
      <div className="bottom-text">Don't have an account? Sign up.</div>
    </div>
  );
};

export default SignInBase;
