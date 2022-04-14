import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import getAboutMeSection from "../../helpers/getAboutMeSection";

export default function AboutMeSection() {
  let params = useParams();
  let aboutMeSections = useSelector((state) => state.counter.aboutMe);
  let aboutMeSection = getAboutMeSection(
    parseInt(params.aboutMeSectionId, 10),
    aboutMeSections
  );
  // debugger;

  // function getAboutMeSection(id) {
  //   return aboutMeSections.find((aboutMeSection) => aboutMeSection.id === id);
  // }

  return (
    <main className="main-content">
      <h2>This section: {aboutMeSection.sectionName}</h2>
      <p>My Id: {aboutMeSection.id}</p>
    </main>
  );
}
