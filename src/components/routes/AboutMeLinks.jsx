import React from "react";
import NavLinksCreator from "../helpers/NavLinksCreator";
import { useSelector } from "react-redux";


const AboutMeLinks = () => {
  let sections = useSelector((state) => state.state.aboutMe);
  let baseUrl = "/aboutme/";

  return <NavLinksCreator sections={sections} baseUrl={baseUrl} />;
};

export default AboutMeLinks;
