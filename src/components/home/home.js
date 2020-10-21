import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import Reader from "../reader/reader";

const Home = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
  });

  return (
    <div style={{ height: height + "px" }} className="home">
      <div className="content">
        <div>
          <Link to="/read">Reader</Link>
        </div>
        <div>
          <Link to="/learn">Learn</Link>
        </div>
        <div>
          <a href="https://store.exlanguage.com">Store</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
