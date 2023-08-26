import React from "react";
import ListCreator from "../../helpers/ListCreator";
import customTranslator from "../../helpers/customTranslator";
import { useTranslation } from "react-i18next";

export default function AboutMeSectionTypeB(props) {
  let aboutMeSection = props.aboutMeSection;

  const { t, i18n } = useTranslation();

  return (
    <main className="main-content">
      <h3>{customTranslator(aboutMeSection.sectionName, t, i18n)}</h3>
      {aboutMeSection.linkLabel ? (
        <p>
          <span className="label">
            {customTranslator(aboutMeSection.linkLabel, t, i18n)}:{" "}
          </span>
          <a href={aboutMeSection.linkUrl} target="_blank">
            {aboutMeSection.linkUrl}
          </a>
        </p>
      ) : null}
      <div>
        {Array.isArray(aboutMeSection.context) ? (
          <div>
            {aboutMeSection.listHeader ? (
              <span className="label">
                {customTranslator(aboutMeSection.listHeader, t, i18n)}
              </span>
            ) : null}

            <ListCreator arrayData={aboutMeSection.context} />
          </div>
        ) : (
          customTranslator(aboutMeSection.context, t, i18n)
        )}{" "}
      </div>
      {aboutMeSection.englishLevelCertificate ? (
        <p>
          {customTranslator("English level certificate:", t, i18n)}{" "}
          <a href={aboutMeSection.englishLevelCertificate} target="_blank">
            {aboutMeSection.englishLevelMarker}
          </a>
        </p>
      ) : null}
      {aboutMeSection.label ? (
        <p>
          <span className="label">{customTranslator(aboutMeSection.label, t, i18n)}: </span>
          <span>{customTranslator(aboutMeSection.addInform, t, i18n)}</span>
        </p>
      ) : null}
    </main>
  );
}
