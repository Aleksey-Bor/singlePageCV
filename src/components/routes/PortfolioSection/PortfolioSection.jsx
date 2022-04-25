import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getSection from "../../helpers/getSection";

export default function PortfolioSection() {
  let params = useParams();
  // console.log(params);
  let portfolioSections = useSelector((state) => state.state.portfolio);
  let portfolioSection = getSection(
    parseInt(params.portfolioSectionId, 10),
    portfolioSections
  );
  // debugger
  // console.log(portfolioSection);

  return (
    <main className="main-content">
      <h3>{portfolioSection.projectName}</h3>
    </main>
  );
}
