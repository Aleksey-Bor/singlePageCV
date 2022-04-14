export default function getAboutMeSection(id, aboutMeSections) {
  return aboutMeSections.find((aboutMeSection) => aboutMeSection.id === id);
}