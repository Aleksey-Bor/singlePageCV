import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <p className="content">
      <nav className="app-navigation">
        <Link to="/aboutme">About Me</Link> |{" "}
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </p>
  );
};

export default AppNavbar;
