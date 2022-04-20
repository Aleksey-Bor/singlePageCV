import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "state",
  initialState: {
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
          "Webpack basics",
          "Git / GitHub",
        ],
        englishLevelCertificate: "https://www.efset.org/cert/ejY1ta",
      },
      {
        sectionName: "Work experience",
        id: 3,
        context: {
          stage4: {
            header:
              "April 2020 - tody: I'm learning Javascript and React on my own",
            subheader:
              'You can see some of my projects in the "Portfolio" section of this resume.',
            id: 4,
          },
          stage3: {
            header: "2009 – 2021: Individual entrepreneur",
            subheader: "I worked under a commission agreement.",
            listHeader: "Kind of activity",
            listContext: ["trading agent", "supervisor of the trading team"],
            id: 3,
          },
          stage2: {
            header: "2007-2009: Vladprodimport - distribution, wholesale",
            subheader: "",
            listHeader: "Position",
            listContext: ["trading agent", "supervisor of the trading team"],
            id: 2,
          },
          stage1: {
            header:
              "2000 – 2007: Educator-psychologist, Smorgon Social and Pedagogical Center",
            id: 1,
          },
        },
      },
      {
        sectionName: "Education",
        id: 4,
        context: {
          stage4: {
            header:
              "April 2020 - tody: Studied Java Script and React on my own",
            listHeader: "Used sources:",
            listContext: [
              "YouTube course: ReactJS - The Samurai Way",
              "React official documentation",
              "Online school materials Rolling Scopes",
              'Modern JavaScript Tutorial ("learn.javascript.ru")',
              "And other",
            ],
            id: 4,
          },
          stage3: {
            header:
              " 2021 - tody: I'm learning English on my own with YouTube courses - English with playlists",

            id: 3,
          },
          stage2: {
            header:
              "August 2019 - March 2020: Studied, Educational Center for Programming and High Tech (IT-Academy)",
            listHeader: "Courses:",
            listContext: [
              "Website development using HTML, CSS and JSt",
              "Development of web applications on Java script",
            ],
            id: 2,
          },
          stage1: {
            header:
              "2000: Graduated from the Belarusian State Pedagogical University",
            subheader: "Faculty: Natural Science",
            listHeader: "Specialty: ",
            listContext: [
              "Teacher of biology",
              "Psychologist in educational institutions",
            ],
            id: 1,
          },
        },
      },
    ],
    portfolio: [],
  },
});

export default slice.reducer;
