import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpEmail = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-email">
      <div className="main-text">Welcome back.</div>
      <div className="name-input">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
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
          <img src={require("../../../static/imgs/arrow.svg")} width="15" />
        </div>
      </div>

      <div className="bottom-text">
        <div>
          Already have an account?{" "}
          <Link className="link" to="/sign-in">
            Sign in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUpEmail;
