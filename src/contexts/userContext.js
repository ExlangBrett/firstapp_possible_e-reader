import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

const getCurrTimeSec = () => {
  return Math.floor(Date.now() / 1000);
};

const UserContextProvider = (props) => {
  const api = "http://127.0.0.1:3001";
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpConfirmed, setSignUpConfirmed] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [signInConfirmed, setSignInConfirmed] = useState(false);
  const [background, setBackground] = useState(false);
  const [signInScreen, setSignInScreen] = useState("signInChooseOption");
  const [loading, setLoading] = useState(false);

  const setUpUserData = (idToken) => {
    const parsedToken = parseJwt(idToken);
    setName(parsedToken["name"]);
    setSignedIn(true);
  };

  const setUpTokens = (idToken, accessToken, refreshToken = "") => {
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) {
      console.log("settings refresh token", refreshToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    const parsedToken = parseJwt(idToken);
    localStorage.setItem("uuid", parsedToken["sub"]);
    localStorage.setItem("expiresAt", parsedToken["exp"]);

    setUpUserData(idToken);

    setTimeout(() => {
      refreshIdToken();
    }, (parsedToken["exp"] - getCurrTimeSec()) * 1000);
  };

  const refreshIdToken = async () => {
    console.log("refreshing tokens");
    const res = await fetch(api + "/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_uuid: localStorage.getItem("uuid"),
        refresh_token: localStorage.getItem("refreshToken"),
      }),
    });
    const { message, data } = await res.json();
    if (res.status == 200) {
      setUpTokens(data["idToken"], data["accessToken"]);
    } else {
      console.log("error", message);
      localStorage.clear();
      setSignedIn(false);
    }
  };

  useEffect(() => {
    console.log(localStorage.getItem("idToken"));
    if (localStorage.getItem("idToken")) {
      setUpUserData(localStorage.getItem("idToken"));

      setTimeout(() => {
        refreshIdToken();
      }, (localStorage.getItem("expiresAt") - getCurrTimeSec()) * 1000);
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      return false;
    }
    return true;
  };

  const signUp = async (name, email, password) => {
    setLoading(true);
    if (name.length === 0) {
      setSignUpError("Incorrect name!");
    } else if (!validateEmail(email)) {
      setSignUpError("Incorrect Email!");
    } else if (!validatePassword(password)) {
      setSignUpError(
        "Password needs to be at least 8 characters long, it needs to contain 1 lowercase and 1 uppercase letter!"
      );
    } else {
      const res = await fetch(api + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const { message } = await res.json();
      if (res.status >= 400) {
        setSignUpError(message);
      } else {
        setSignUpConfirmed(true);
      }
    }
    setLoading(false);
  };

  const signIn = async (email, password) => {
    setLoading(true);
    if (!validateEmail(email)) {
      setSignInError("Incorrect Email!");
    } else if (!validatePassword(password)) {
      setSignInError("Invalid password!");
    } else {
      const res = await fetch(api + "/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const { message, data } = await res.json();
      if (res.status == 200) {
        setUpTokens(data["idToken"], data["accessToken"], data["refreshToken"]);
        setSignInConfirmed(true);
      } else {
        setSignInError(message);
      }
    }
    setLoading(false);
  };

  const restoreSignIn = () => {
    setSignInError("");
    setSignInConfirmed(false);
  };

  const restoreSignUp = () => {
    setSignUpError("");
    setSignUpConfirmed(false);
  };

  const signOut = () => {
    localStorage.clear();
    console.log("signinout");
    setSignedIn(false);
  };

  const showTokens = () => {
    console.log("idtoken", localStorage.getItem("idToken"));
    console.log("refreshTOken", localStorage.getItem("refreshToken"));
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        showTokens,
        signUp,
        signUpError,
        signUpConfirmed,
        signIn,
        signInError,
        signInConfirmed,
        restoreSignIn,
        signOut,
        signedIn,
        name,
        background,
        setBackground,
        signInScreen,
        setSignInScreen,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
