import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavLinksCreator = (props) => {
  // debugger
  let sections = props.sections;
  let baseUrl = props.baseUrl;
  return (
    <div className="nav-links">
      <nav>
        {sections.map((section) => (
          <NavLink
            className="nav-link"
            to={`${baseUrl}${section.id}`}
            key={section.id}
          >
            {section.sectionName}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default NavLinksCreator;
