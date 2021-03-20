import React, { useEffect, useState } from "react";
import food from "./icons/watermelon-icon.png";
import zoo from "./icons/zoo.png";
import beer from "./icons/beer.png";
import beach from "./icons/beach.png";
import car from "./icons/car.png";
import disco from "./icons/disco.png";
import games from "./icons/game.png";
import karaoke from "./icons/karaoke.png";
import outdoor from "./icons/outdoor.png";
import park from "./icons/park.png";
import party from "./icons/dancing.png";
import themePark from "./icons/theme-park.png";
import anime from "./icons/chopper.png";
import birthday from "./icons/Birthday.png";
import home from "./icons/home.png";

function Pin({ type }) {
  let category = type.category;
  useEffect(() => {
    displayMarker(category);
  }, []);

  const [pin, setPin] = useState();
  const displayMarker = (category) => {
    switch (category) {
      case (category = "anime"):
        setPin(
          <img
            src={anime}
            alt="anime"
            style={{ width: "26px", height: "26px" }}
          />
        );

        break;
      case (category = "beach"):
        setPin(
          <img
            src={beach}
            alt="beach"
            style={{ width: "26px", height: "26px" }}
          />
        );

        break;
      case (category = "birthday"):
        setPin(
          <img
            src={birthday}
            alt="birthday"
            style={{ width: "26px", height: "26px" }}
          />
        );

        break;
      case (category = "car"):
        setPin(
          <img src={car} alt="car" style={{ width: "26px", height: "26px" }} />
        );

        break;

      case (category = "drinks" || "liquor"):
        setPin(
          <img
            src={beer}
            alt="beer"
            style={{ width: "26px", height: "26px" }}
          />
        );
        break;
      case (category = "disco"):
        setPin(
          <img
            src={disco}
            alt="disco"
            style={{ width: "26px", height: "26px" }}
          />
        );
        break;
      case (category = "food"):
        setPin(
          <img
            src={food}
            alt="food"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "games"):
        setPin(
          <img
            src={games}
            alt="games"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "general" || "default"):
        setPin(
          <svg
            style={{ fill: "#1f4980" }}
            height="20"
            viewBox="0 0 24 24"
            x="0px"
            y="0px"
          >
            <path
              d="M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z"
            />
          </svg>
        );
        break;
      case (category = "home"):
        setPin(
          <img
            src={home}
            alt="home"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "karaoke" || "sing"):
        setPin(
          <img
            src={karaoke}
            alt="karaoke"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "outdoor"):
        setPin(
          <img
            src={outdoor}
            alt="outdoor"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "park"):
        setPin(
          <img
            src={park}
            alt="park"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "party"):
        setPin(
          <img
            src={party}
            alt="party"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "theme-park"):
        setPin(
          <img
            src={themePark}
            alt="theme-park"
            style={{ width: "24px", height: "24px" }}
          />
        );
        break;
      case (category = "zoo"):
        setPin(
          <img src={zoo} alt="zoo" style={{ width: "26px", height: "26px" }} />
        );
        break;
      default:
        break;
    }
  };

  return <>{pin}</>;
}

export default Pin;
