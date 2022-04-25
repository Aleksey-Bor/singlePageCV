import React from "react";
import AboutMeSectionTypeA from "./AboutMeSectionTypeA";
import AboutMeSectionTypeB from "./AboutMeSectionTypeB";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getSection from "../../helpers/getSection";
import isObject from "../../helpers/isObject";

export default function AboutMeSection() {
  let params = useParams();
  let aboutMeSections = useSelector((state) => state.state.aboutMe);
  let aboutMeSection = getSection(
    parseInt(params.aboutMeSectionId, 10),
    aboutMeSections
  );

  let isTypeA = isObject(aboutMeSection.context);

  return (
    <div>
      {isTypeA ? (
        <AboutMeSectionTypeA aboutMeSection={aboutMeSection}/>
      ) : (
        <AboutMeSectionTypeB aboutMeSection={aboutMeSection} />
      )}
    </div>
  );
}
