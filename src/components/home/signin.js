import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

const SignIn = () => {
  const { signIn, signInError, signInConfirmed, restoreSignIn } = useContext(
    UserContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [background, setBackground] = useState(false);

  const history = useHistory();

  return (
    <div className="signin">
      <div className={background ? "main background" : "main"}>
        <div className="main-text">Welcome back.</div>
        <div className="sign-in-options">
          <div>
            <img src={require("../../static/imgs/GoogleLogo.svg")} width="25" />
            <a>Sign in with Google</a>
          </div>
          <div>
            <img src={require("../../static/imgs/FBLogo.svg")} width="25" />
            <a>Sign in with Facebook</a>
          </div>
          <div>
            <img src={require("../../static/imgs/MailLogo.svg")} width="25" />
            <a>Sign in with email</a>
          </div>
        </div>
      </div>
      <div className="bottom-text">Don't have an account? Sign up.</div>
    </div>
  );
};

export default SignIn;
