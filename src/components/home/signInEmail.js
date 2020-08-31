import React, { useState } from "react";

const SignInEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-email">
      <div className="main-text">Welcome back.</div>
      <div className="field">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div className="field">
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
      </div>
      <div className="signin-button field">
        <a>Sign In</a>
        {"  "}
        <img src={require("../../static/imgs/arrow.svg")} width="15" />
      </div>
    </div>
  );
};

export default SignInEmail;
