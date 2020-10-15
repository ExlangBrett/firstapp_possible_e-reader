import React from "react";
import { ReactReader } from "react-reader";

const Home = () => {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {" "}
      // * Container needs a height..
      <ReactReader
        url={require("../../static/epubs/alice.epub")}
        title={"Alice in wonderland"}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={(epubcifi) => console.log(epubcifi)}
      />
    </div>
  );
};

export default Home;
