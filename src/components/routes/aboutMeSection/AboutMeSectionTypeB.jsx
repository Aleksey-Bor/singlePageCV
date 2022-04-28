import React from "react";
import ListCreator from "../../helpers/ListCreator";

export default function AboutMeSectionTypeB(props) {
  let aboutMeSection = props.aboutMeSection;

  return (
    <main className="main-content">
      <h3>{aboutMeSection.sectionName}</h3>
      {aboutMeSection.linkLabel ? (
        <p>
          <span className="label">{aboutMeSection.linkLabel}: </span>
          <a href={aboutMeSection.linkUrl} target="_blank">{aboutMeSection.linkUrl}</a>
        </p>
      ) : null}
      <div>
        {Array.isArray(aboutMeSection.context) ? (
          <div>
            {aboutMeSection.listHeader ? (
              <span className="label">{aboutMeSection.listHeader}</span>
            ) : null}

            <ListCreator arrayData={aboutMeSection.context} />
          </div>
        ) : (
          aboutMeSection.context
        )}{" "}
      </div>
      {aboutMeSection.englishLevelCertificate ? (
        <p>
          English level certificate:{" "}
          <a href={aboutMeSection.englishLevelCertificate} target="_blank">
            {aboutMeSection.englishLevelMarker}
          </a>
        </p>
      ) : null}
      {aboutMeSection.label ? (
        <p>
          <span className="label">{aboutMeSection.label}: </span>
          <span>{aboutMeSection.addInform}</span>
        </p>
      ) : null}
    </main>
  );
}
