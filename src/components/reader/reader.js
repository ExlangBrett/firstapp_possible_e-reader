import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader";

let book = {};

const Reader = () => {
  const [highlighted, setHighlighted] = useState("");
  const [height, setHeight] = useState(window.innerHeight);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
  }, []);

  const handleSelected = (range) => {
    book.getRange(range).then((r) => {
      setHighlighted(r.toString());
    });
  };

  return (
    <>
      {showPopup ? (
        <div className="popup">
          <div className="popup-inner">
            {highlighted.split(" ").map((w) => (
              <div className="word-outer">
                <div>{w}</div>
                <div className="button">
                  <span>add</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {highlighted && showPopup === false ? (
        <div className="highlighted">
          <div
            onClick={() => {
              setShowPopup(!showPopup);
            }}
          >
            click to show words
          </div>
        </div>
      ) : null}
      <div
        id="book"
        style={{
          height: height + "px",
          width: "100vw",
        }}
      >
        <ReactReader
          url={require("../../static/epubs/chinese.epub")}
          getRendition={(rendition) => {
            book = rendition.book;
            const spine_get = rendition.book.spine.get.bind(
              rendition.book.spine
            );
            rendition.book.spine.get = function (target) {
              let t = spine_get(target);
              console.log(t);
              while (t == null && target.startsWith("../")) {
                target = target.substring(3);
                t = spine_get(target);
              }
              return t;
            };
          }}
          handleTextSelected={(e) => handleSelected(e)}
        />
      </div>
    </>
  );
};

export default Reader;
