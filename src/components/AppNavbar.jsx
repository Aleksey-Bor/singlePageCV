import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = ({t}) => {
  return (
    <div className="content">
      <nav className="app-navigation">
        <NavLink to="/aboutme">{t("aboutMe")}</NavLink> |{" "}
        <NavLink to="/portfolio">{t("portfolio")}</NavLink>
      </nav>
    </div>
  );
};

export default AppNavbar;
