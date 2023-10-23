import React from "react";
import Navbar from "./Navbar";
import Arrow from "../images/icon-arrow-down.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <h1 className="copy">WE ARE CREATIVES</h1>
      <div className="arrow">
        <img src={Arrow} alt="arrow down" />
      </div>
    </div>
  );
};

export default Header;
