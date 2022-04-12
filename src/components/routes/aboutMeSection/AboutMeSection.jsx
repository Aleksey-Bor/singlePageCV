import { useParams } from 'react-router-dom';
import { getAboutMeSection } from '../../../data';

export default function AboutMeSection() {
  let params = useParams();
  let aboutMeSection = getAboutMeSection(parseInt(params.aboutMeSectionId, 10));
  
  return (
    <main className='main-content'>
      <h2>This section: {aboutMeSection.sectionName}</h2>
      <p>
        My Id: {aboutMeSection.id}
      </p>
    </main>
  );
}
