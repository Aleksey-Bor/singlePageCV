import React from "react";
import getStageKeyContext from "../../helpers/getStageKeyContext";
import ListCreator from "../../helpers/ListCreator";

export default function AboutMeSectionTypeA(props) {
  let aboutMeSectionContext = props.aboutMeSection.context;

  return (
    <main className="main-content">
      {getStageKeyContext(aboutMeSectionContext).map((obj) => {
        return (
          <div>
            {obj.header ? <h4>{obj.header}</h4> : null}
            {obj.subheader ? <p>{obj.subheader}</p> : null}
            {obj.listContext ? (
              <div>
                {obj.listHeader}:
                <ListCreator arrayData={obj.listContext} />
              </div>
            ) : null}
          </div>
        );
      })}
    </main>
  );
}
