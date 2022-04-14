import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AboutMe = () => {
  let aboutMeSections = useSelector((state) => state.state.aboutMe);

  return (
    <div className="aboutMe-links">
      <nav>
        {aboutMeSections.map((aboutMeSection) => (
          <NavLink
            className="aboutMe-link"
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

export default AboutMe;
