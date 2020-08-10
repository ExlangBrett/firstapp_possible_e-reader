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

import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Chapter from "./components/chapter";

const history = createBrowserHistory({ forceRefresh: true });

function App() {
  return (
    <ChapterContextProvider>
      <Router history={history}>
        <div>
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
          </Switch>
        </div>
      </Router>
    </ChapterContextProvider>
  );
}

export default App;
