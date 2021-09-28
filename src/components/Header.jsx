import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link target="_blank" to={{ pathname: "https://www.traffictubes.com" }}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
};

export default Header;
