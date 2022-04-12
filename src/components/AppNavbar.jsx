import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <div className="content">
      <nav className="app-navigation">
        <NavLink to="/aboutme">About Me</NavLink> |{" "}
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </div>
  );
};

export default AppNavbar;
