import React from "react";

const SignInChooseOption = () => {
  return (
    <div className="signin-options">
      <div className="main-text">Welcome back.</div>
      <div className="signin-options-content">
        <div className="field">
          <img src={require("../../static/imgs/GoogleLogo.svg")} width="25" />
          <a>Sign in with Google</a>
        </div>
        <div className="field">
          <img src={require("../../static/imgs/FBLogo.svg")} width="25" />
          <a>Sign in with Facebook</a>
        </div>
        <div className="field">
          <img src={require("../../static/imgs/MailLogo.svg")} width="25" />
          <a>Sign in with email</a>
        </div>
      </div>
    </div>
  );
};

export default SignInChooseOption;
