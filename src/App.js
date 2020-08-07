import React from "react";
import "./static/main.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ChapterContextProvider from "./contexts/chapterContext";
import { ChapterContext } from "./contexts/chapterContext";

import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Chapter from "./components/chapter";

function App() {
  return (
    <ChapterContextProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/chapter/:chapterId">
              <Chapter />
            </Route>
          </Switch>
        </div>
      </Router>
    </ChapterContextProvider>
  );
}

export default App;
