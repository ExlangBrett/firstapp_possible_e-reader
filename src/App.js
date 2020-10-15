import React, { useContext, useEffect } from "react";
import "./static/main.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import ChapterContextProvider from "./contexts/chapterContext";
import { ChapterContext } from "./contexts/chapterContext";

import AuthBase from "./components/auth/authBase";
import Dashboard from "./components/learning/dashboard";
import Chapter from "./components/learning/chapter";
import Concept from "./components/learning/concept";
import UserContextProvider, { UserContext } from "./contexts/userContext";
import LearningContextProvider, {
  LearningContext,
} from "./contexts/learningContext";
import Loading from "./components/loading";
import Home from "./components/home/home";

const history = createBrowserHistory({ forceRefresh: true });

function App() {
  return (
    <UserContextProvider>
      <LearningContextProvider>
        <Router history={history}>
          <Loading />
          <Paths />
        </Router>
      </LearningContextProvider>
    </UserContextProvider>
  );
}

const Paths = () => {
  const { signedIn } = useContext(UserContext);

  return (
    <Switch>
      <Route path={["/sign-in", "/sign-up"]}>
        <AuthBase />
      </Route>
      {/* <Redirect exact from="/" to="/dashboard" /> */}
      <Route path={["/", "/dashboard", "/chapter", "/concept"]}>
        {signedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/chapter/:chapterId">
              <Chapter />
            </Route>
            <Route path="/concept/:conceptId">
              <Concept />
            </Route>
          </>
        ) : (
          // <Redirect to="/sign-in" /> breaks sign in with email button
          <Redir />
        )}
      </Route>
    </Switch>
  );
};

const Redir = () => {
  const history = useHistory();

  useEffect(() => {
    window.location.href = "/sign-in";
  }, []);

  return <></>;
};

export default App;
