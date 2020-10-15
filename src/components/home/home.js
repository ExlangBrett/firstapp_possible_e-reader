import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader";

let book = {};

const Home = () => {
  const [highlighted, setHighlighted] = useState("");

  const handleSelected = (range) => {
    book.getRange(range).then((r) => {
      setHighlighted(r.toString());
    });
  };

  return (
    <>
      {highlighted ? (
        <div className="highlighted">
          <div>{highlighted}</div>
        </div>
      ) : null}
      <div
        id="book"
        style={{ position: "relative", height: "100vh", width: "100vw" }}
      >
        {" "}
        // * Container needs a height..
        <ReactReader
          url={require("../../static/epubs/alice.epub")}
          title={"Alice in wonderland"}
          location={"epubcfi(/6/2[cover]!/6)"}
          // locationChanged={(epubcifi) => console.log(epubcifi)}
          getRendition={(e) => (book = e.book)}
          handleTextSelected={(e) => handleSelected(e)}
        />
      </div>
    </>
  );
};

export default Home;
