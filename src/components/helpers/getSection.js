export default function getSection(id, sections) {
  return sections.find((sections) => sections.id === id);
}