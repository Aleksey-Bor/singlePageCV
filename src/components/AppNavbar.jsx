import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <div className="content">
      <nav className="app-navigation">
        <Link to="/aboutme">About Me</Link> |{" "}
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </div>
  );
};

export default AppNavbar;
