import React from "react";
import "./iOS.scss";

function iOS() {
  return (
    <>
      <div className="persistent-overlay persistent-overlay__top">
        <img
          src={require("../../assets/icons/status-bar.svg").default}
          className="status-bar"
          alt="iOS 17 status bar black"
        />
      </div>
      <div className="persistent-overlay persistent-overlay__bottom">
        <img
          src={require("../../assets/icons/home-indicator.svg").default}
          className="home-indicator"
          alt="iOS 17 home indicator bar black"
        />
      </div>
    </>
  );
}

export default iOS;
