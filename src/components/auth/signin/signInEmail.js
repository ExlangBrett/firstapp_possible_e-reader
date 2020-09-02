import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../contexts/userContext";

const SignInEmail = () => {
  const { setBackground } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setBackground(true);
  }, []);

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
          <span>Sign In</span>
          {"  "}
          <img src={require("../../../static/imgs/arrow.svg")} width="15" />
        </div>
      </div>

      <div className="bottom-text">
        <div>
          Have you{" "}
          <Link className="link" to="/sign-in/forgotten-password">
            forgotten the password
          </Link>
          ?
        </div>
      </div>
    </div>
  );
};

export default SignInEmail;
