import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getSection from "../../helpers/getSection";
import { useTranslation } from "react-i18next";
import customTranslator from "../../helpers/customTranslator";

export default function PortfolioSection() {
  let params = useParams();
  let portfolioSections = useSelector((state) => state.state.portfolio);
  let portfolioSection = getSection(
    parseInt(params.portfolioSectionId, 10),
    portfolioSections
  );

  const { t, i18n } = useTranslation();

  return (
    <main className="main-content">
      <h3>{customTranslator(portfolioSection.sectionName, t, i18n)}</h3>

      {portfolioSection.screen ? (
        <div className="screenWrapper">
          <img
            className="screen"
            src={portfolioSection.screen}
            alt="My Front-end development"
          />
        </div>
      ) : null}

      <p>{customTranslator(portfolioSection.context, t, i18n)}</p>
      {portfolioSection.skillsList ? (
        <div>
          {customTranslator(portfolioSection.skilLsLabel, t, i18n)}:
          <ul>
            {portfolioSection.skillsList.map((skill) => (
              <li>{customTranslator(skill, t, i18n)}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {portfolioSection.projectUrl ? (
        <p>
          {i18n.language === "en"
            ? "You can test this project from this link:"
            : "Вы можете протестировать этот проект по этой ссылке:"}{" "}
          <a href={portfolioSection.projectUrl} target="_blank">
            {portfolioSection.sectionName.toUpperCase()}
          </a>
        </p>
      ) : null}
      {portfolioSection.login ? (
        <div>
          {i18n.language === "en"
            ? "Use to sign in:"
            : "Используйте для входа:"}{" "}
          <ul>
            <li>Login: {portfolioSection.login}</li>
            <li>Password: {portfolioSection.password}</li>
          </ul>
        </div>
      ) : null}
      {portfolioSection.Interest ? <p>{customTranslator(portfolioSection.Interest, t, i18n)}</p> : null}
      {portfolioSection.notes ? (
        <p className="notes">
          {customTranslator(portfolioSection.notes, t, i18n)}
        </p>
      ) : null}
    </main>
  );
}
