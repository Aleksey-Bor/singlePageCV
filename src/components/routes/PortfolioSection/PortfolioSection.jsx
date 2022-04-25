import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PortfolioSection() {
  let params = useParams();
  let aboutMeSections = useSelector((state) => state.state.aboutMe);
/*   let aboutMeSection = getAboutMeSection(
    parseInt(params.aboutMeSectionId, 10),
    aboutMeSections
  ); */

  return (
    <div>This is Portfolio</div>
  )


}
