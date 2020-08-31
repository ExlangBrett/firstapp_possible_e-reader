import React, { useState } from "react";

const SignInForgottenPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="signin-forgotten-password">
      <div className="main-text">
        Please tell us which email address you are registered with us, so we can
        send the password to you.
      </div>
      <div className="field">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div className="send-password-button field">
        <a>Send Password</a>
        {"  "}
        <img src={require("../../static/imgs/arrow.svg")} width="15" />
      </div>
      <div className="bottom-text">Found the password? Sign in</div>
    </div>
  );
};

export default SignInForgottenPassword;
