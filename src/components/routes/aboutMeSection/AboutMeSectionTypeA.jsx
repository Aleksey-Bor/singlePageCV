import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getAboutMeSection from "../../helpers/getAboutMeSection";
import ListCreator from "../../helpers/ListCreator";

export default function AboutMeSectionTypeA(props) {
  let aboutMeSection = props.aboutMeSection;

  return (
    <main className="main-content">
      <h4>{aboutMeSection.context.stage4.header}</h4>
      <p>{aboutMeSection.context.stage4.subheader}</p>
      <h4>{aboutMeSection.context.stage3.header}</h4>
      <p>{aboutMeSection.context.stage3.subheader}</p>
      <div>
        {aboutMeSection.context.stage3.listHeader}:
        <ul>
          <ListCreator arrayData={aboutMeSection.context.stage3.listContext} />
        </ul>
      </div>
      <h4>{aboutMeSection.context.stage2.header}</h4>
      <p>{aboutMeSection.context.stage2.subheader}</p>
      <div>
        {aboutMeSection.context.stage2.listHeader}:
        <ul>
          <ListCreator arrayData={aboutMeSection.context.stage2.listContext} />
        </ul>
      </div>
      <h4>{aboutMeSection.context.stage1.header}</h4>
      <p>{aboutMeSection.context.stage1.subheader}</p>
    </main>
  );
}
