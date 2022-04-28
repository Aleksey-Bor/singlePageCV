import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getSection from "../../helpers/getSection";
import socialNetworkScreen from "../../../assets/social_network.jpg";

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

      <div className="screenWrapper">
        <img className="screen" src={socialNetworkScreen} />
      </div>

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
      {portfolioSection.link ? (
        <p>
          You can test this project from this link:{" "}
          <a href={portfolioSection.link} target="_blank">
            {portfolioSection.sectionName.toUpperCase()}
          </a>
        </p>
      ) : null}
      {portfolioSection.login ? (
        <div>
          Use to sign in:{" "}
          <ul>
            <li>Login: {portfolioSection.login}</li>
            <li>Login: {portfolioSection.password}</li>
          </ul>
        </div>
      ) : null}
      {portfolioSection.Interest ? <p>{portfolioSection.Interest}</p> : null}
      {portfolioSection.notes ? (
        <p className="notes">{portfolioSection.notes}</p>
      ) : null}
    </main>
  );
}
