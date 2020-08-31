import React from "react";
import "./static/main.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import ChapterContextProvider from "./contexts/chapterContext";
import { ChapterContext } from "./contexts/chapterContext";

import Home from "./components/home/home";
import Dashboard from "./components/dashboard";
import Chapter from "./components/chapter/chapter";
import UserContextProvider, { UserContext } from "./contexts/userContext";
import SignUp from "./components/home/signup";
import SignIn from "./components/home/signin";

const history = createBrowserHistory({ forceRefresh: true });

function App() {
  return (
    <UserContextProvider>
      <ChapterContextProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/chapter/:chapterId">
              <Chapter history={history} />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </ChapterContextProvider>
    </UserContextProvider>
  );
}

export default App;
