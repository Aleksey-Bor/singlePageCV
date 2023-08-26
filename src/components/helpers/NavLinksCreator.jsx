import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import customTranslator from "./customTranslator";


const NavLinksCreator = (props) => {
  let sections = props.sections;
  let baseUrl = props.baseUrl;

  const { t, i18n } = useTranslation();
  
  return (
    <div className="nav-links">
      <nav>
        {sections.map((section) => (
          <NavLink
            className="nav-link"
            to={`${baseUrl}${section.id}`}
            key={section.id}
          >
            {customTranslator(section.sectionName, t, i18n)}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default NavLinksCreator;
