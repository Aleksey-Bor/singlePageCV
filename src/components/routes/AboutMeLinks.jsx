import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AboutMeLinks = () => {
  let aboutMeSections = useSelector((state) => state.state.aboutMe);

  return (
    <div className="nav-links">
      <nav>
        {aboutMeSections.map((aboutMeSection) => (
          <NavLink
            className="nav-link"
            to={`/aboutme/${aboutMeSection.id}`}
            key={aboutMeSection.id}
          >
            {aboutMeSection.sectionName}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default AboutMeLinks;
