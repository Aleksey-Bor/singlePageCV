import React from "react";
import AboutMeSectionTypeA from "./AboutMeSectionTypeA";
import AboutMeSectionTypeB from "./AboutMeSectionTypeB";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getAboutMeSection from "../../helpers/getAboutMeSection";
import isObject from "../../helpers/isObject";

export default function AboutMeSection() {
  let params = useParams();
  let aboutMeSections = useSelector((state) => state.state.aboutMe);
  let aboutMeSection = getAboutMeSection(
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
