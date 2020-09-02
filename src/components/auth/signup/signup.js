import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../../contexts/userContext";

const SignUp = () => {
  const { signUp, signUpError, signUpConfirmed } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <div className="signup">
      <div className="signup-inner">
        {signUpConfirmed ? (
          <div className="signup-confirmed">
            Congrats, You are now registered! We sent you an email with link to
            activate your account.
          </div>
        ) : (
          <>
            <div className="error">
              {signUpError ? (
                <div className="error-inner">{signUpError}</div>
              ) : null}
            </div>

            <div className="input-field">
              <input
                id="email"
                type="email"
                className=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                id="name"
                type="text"
                className=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div
              onClick={() => signUp(name, email, password)}
              className="signup-button"
            >
              <div>Sign Up</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
