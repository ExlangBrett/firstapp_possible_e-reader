import React, { useContext } from "react";
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

import AuthBase from "./components/auth/authBase";
import Dashboard from "./components/learning/dashboard";
import Chapter from "./components/learning/chapter";
import UserContextProvider, { UserContext } from "./contexts/userContext";
import Loading from "./components/loading";

const history = createBrowserHistory({ forceRefresh: true });

function App() {
  return (
    <UserContextProvider>
      <ChapterContextProvider>
        <Router history={history}>
          <Loading />
          <Switch>
            <Route path={["/sign-in", "/sign-up"]}>
              <AuthBase />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/chapter/:chapterId">
              <Chapter history={history} />
            </Route>
          </Switch>
        </Router>
      </ChapterContextProvider>
    </UserContextProvider>
  );
}

export default App;
