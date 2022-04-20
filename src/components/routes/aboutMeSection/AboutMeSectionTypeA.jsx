import React from "react";
import getStageKeyContext from "../../helpers/getStageKeyContext";
import ListCreator from "../../helpers/ListCreator";

export default function AboutMeSectionTypeA(props) {
  let aboutMeSectionContext = props.aboutMeSection.context;
  debugger
  return (
    <main className="main-content">
      {getStageKeyContext(aboutMeSectionContext).map((obj) => {
        return (
          <div key={obj.id}>
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
