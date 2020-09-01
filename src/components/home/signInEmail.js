import React, { useState } from "react";

const SignInEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-email">
      <div className="main-text">Welcome back.</div>
      <div className="signin-email-content">
        <div className="email-input">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="password-input">
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
        </div>
        <div className="signin-button">
          <a>Sign In</a>
          {"  "}
          <img src={require("../../static/imgs/arrow.svg")} width="15" />
        </div>
      </div>

      <div className="bottom-text">Have you forgotten the password?</div>
    </div>
  );
};

export default SignInEmail;
