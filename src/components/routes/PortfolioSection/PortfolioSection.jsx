import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getSection from "../../helpers/getSection";

export default function PortfolioSection() {
  let params = useParams();
  let portfolioSections = useSelector((state) => state.state.portfolio);
  let portfolioSection = getSection(
    parseInt(params.portfolioSectionId, 10),
    portfolioSections
  );

  return (
    <main className="main-content">
      <h3>{portfolioSection.sectionName}</h3>
      <p>{portfolioSection.context}</p>
      {portfolioSection.skillsList ? (
        <div>
          {portfolioSection.skilLsLabel}:
          <ul>
            {portfolioSection.skillsList.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {portfolioSection.notes ? <p>{portfolioSection.notes}</p> : null}
    </main>
  );
}
