import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getAboutMeSection from "../../helpers/getAboutMeSection";
import ListCreator from "../../helpers/ListCreator";

export default function AboutMeSectionTypeB(props) {
  let aboutMeSection = props.aboutMeSection;

  return (
    <main className="main-content">
      <h2>{aboutMeSection.sectionName}</h2>
      <p>
        {Array.isArray(aboutMeSection.context) ? (
          <ListCreator arrayData={aboutMeSection.context} />
        ) : (
          aboutMeSection.context
        )}{" "}
      </p>
      {aboutMeSection.englishLevelCertificate ? (
        <p>
          English level certificate:{" "}
          <a href={aboutMeSection.englishLevelCertificate} target="_blank">
            A2
          </a>
        </p>
      ) : null}
    </main>
  );
}
