import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getAboutMeSection from "../../helpers/getAboutMeSection";
import ListCreator from "../../helpers/ListCreator";

export default function AboutMeSection() {
  let params = useParams();
  let aboutMeSections = useSelector((state) => state.state.aboutMe);
  let aboutMeSection = getAboutMeSection(
    parseInt(params.aboutMeSectionId, 10),
    aboutMeSections
  );

  return (
    <main className="main-content">
      <h2>{aboutMeSection.sectionName}</h2>
      <p>
        {Array.isArray(aboutMeSection.context) ? <ListCreator arrayData ={aboutMeSection.context}/> : aboutMeSection.context}{" "}
      </p>
    </main>
  );
}
