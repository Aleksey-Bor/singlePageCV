import React from "react";
import { useSelector } from "react-redux";
import NavLinksCreator from "../helpers/NavLinksCreator";

const PortfolioLinks = () => {
  let sections = useSelector((state) => state.state.portfolio);
  let baseUrl = "/portfolio/";

  return <NavLinksCreator sections={sections} baseUrl={baseUrl} />;
};

export default PortfolioLinks;
