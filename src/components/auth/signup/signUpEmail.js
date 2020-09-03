import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../../contexts/userContext";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const SignUpEmail = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const {
    setSignInScreen,
    setBackground,
    signUp,
    signUpError,
    signUpConfirmed,
  } = useContext(UserContext);

  useEffect(() => {
    setBackground(true);
  }, []);

  return (
    <div className="signup-email">
      {signUpError ? (
        <div className="error">{signUpError}</div>
      ) : (
        <div className="main-text">Learn & Experience a language.</div>
      )}
      <div className="signup-email-content">
        <div className="name-input">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
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
        <div
          className="signup-button"
          onClick={() => signUp(name, email, password)}
        >
          <span>Sign Up</span>
          {"  "}
          <img src={require("../../../static/imgs/arrow.svg")} width="15" />
        </div>
      </div>
    </div>
  );
};

export default SignUpEmail;
