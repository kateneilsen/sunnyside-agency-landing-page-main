import React from "react";
import Logo from "../images/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Logo" className="logo" />
    </footer>
  );
};

export default Footer;
