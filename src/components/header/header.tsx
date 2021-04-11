import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/images/stackline_logo.svg";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
    </header>
  );
};
export default Header;
