import React, { useEffect } from "react";

function Pin({ type }) {
  let category = type.category;
  useEffect(() => {
    console.log(type);
  });
  return (
    <>
      {" "}
      {(() => {
        switch (category) {
          case category === "beach":
            return console.log("success");
          case category === "car":
            return console.log("success");

          case category === "default":
            return console.log("success");

          case category === "drinks" || category === "liquor":
            return console.log("success");

          case category === "disco":
            return console.log("success");

          case category === "food":
            return console.log("success");

          case category === "games":
            return console.log("success");

          case category === "general":
            return console.log("success");

          case category === "home":
            return console.log("success");

          case category === "karaoke" || category === "sing":
            return console.log("success");

          case category === "outdoor":
            return console.log("success");

          case category === "park":
            return console.log("success");

          case category === "party":
            return console.log("success");

          case category === "theme-park":
            return console.log("success");

          case category === "zoo":
            return console.log("success");

          default:
            break;
        }
      })()}
    </>
  );
}

export default Pin;
