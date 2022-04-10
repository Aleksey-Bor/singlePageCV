/* let aboutMe = {
  summary:
    "I am persistent. I love to improve my efficiency and functionality. I appreciate it when a scientific approach is at the heart of every case.",
  skills: [
    "HTML / CSS",
    "JS / TypeScript",
    "React / Redux",
    "jQuery",
    "Webpack Basics",
    "Git / GitHub",
  ],
  englishCertificateLink: "https://www.efset.org/cert/ejY1ta",
}; */


let data = {
  aboutMe: [
    {
      sectionName: "Summary",
      id: 1,
      context:
      "I am persistent. I love to improve my efficiency and functionality. I appreciate it when a scientific approach is at the heart of every case.",
    },
    {
      sectionName: "Skills",
      id: 2,
      context: [
        "HTML / CSS",
        "JS / TypeScript",
        "React / Redux",
        "jQuery",
        "Webpack Basics",
        "Git / GitHub",
      ],
    },
  ],
  portfolio: [],
};

export function getData() {
  return data;
}