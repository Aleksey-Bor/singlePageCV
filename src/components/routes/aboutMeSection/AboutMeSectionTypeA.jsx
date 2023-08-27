import React from "react";
import getStageKeyContext from "../../helpers/getStageKeyContext";
import ListCreator from "../../helpers/ListCreator";
import customTranslator from "../../helpers/customTranslator";
import { useTranslation } from "react-i18next";

export default function AboutMeSectionTypeA(props) {
  let aboutMeSection = props.aboutMeSection;
  let aboutMeSectionContext = props.aboutMeSection.context;

  const { t, i18n } = useTranslation();

  return (
    <main className="main-content">
      <h3>{customTranslator(aboutMeSection.sectionName, t, i18n)}</h3>
      {getStageKeyContext(aboutMeSectionContext).map((obj) => {
        return (
          <div key={obj.id}>
            {obj.header ? <h4>{customTranslator(obj.header, t, i18n)}</h4> : null}
            {obj.subheader ? <p>{customTranslator(obj.subheader, t, i18n)}</p> : null}
            {obj.listContext ? (
              <div>
                {customTranslator(obj.listHeader, t, i18n)}:
                <ListCreator arrayData={obj.listContext}/>
              </div>
            ) : null}
          </div>
        );
      })}
    </main>
  );
}
