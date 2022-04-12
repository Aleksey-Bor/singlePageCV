import React from "react";
import { getData } from "../../data";
import { NavLink, Outlet } from "react-router-dom";

const AboutMe = () => {
  let data = getData();
  let aboutMeSections = data.aboutMe;
  // let sectionId = data.id;

  return (
    <div className="aboutMe-links">
      <nav>
        {aboutMeSections.map((aboutMeSection) => (
          <NavLink className="aboutMe-link" to={`/aboutme/${aboutMeSection.id}`} key={aboutMeSection.id}>{aboutMeSection.sectionName}</NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default AboutMe;
