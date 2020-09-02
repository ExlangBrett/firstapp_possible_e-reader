import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../contexts/userContext";

const SignInForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const { setSignInScreen, setBackground } = useContext(UserContext);

  useEffect(() => {
    setBackground(true);
  }, []);

  return (
    <div className="signin-forgotten-password">
      <div className="main-text">
        Please tell us which email address you are registered with us, so we can
        send the password to you.
      </div>
      <div className="signin-forgotten-password-content">
        <div className="email-input">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="send-password-button">
          <span>Send Password</span>
          {"  "}
          <img src={require("../../../static/imgs/arrow.svg")} width="15" />
        </div>
      </div>

      <div className="bottom-text">
        <div>
          Found the password? <Link to="/sign-in/email">Sign in</Link>.
        </div>
      </div>
    </div>
  );
};

export default SignInForgottenPassword;
