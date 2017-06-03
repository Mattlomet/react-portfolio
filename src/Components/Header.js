import React from "react";
import logo from "../logo.svg";
import "../Stylesheets/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="" />
      <div className="header-text">Ma<p>tt</p>hew Lo<p>me</p>t</div>
    </div>
  );
}

export default Header;
