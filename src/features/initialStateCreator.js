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
            header: "April 2020 - tody: I'm learning Javascript and React on my own",
            subheader: "You can see some of my projects in the \"Portfolio\" section of this resume."
          },
          stage3: {
            header: "2009 – 2021: Individual entrepreneur",
            subheader: "I worked under a commission agreement.",
            listHeader: "Kind of activity",
            listContext: [
              "trading agent",
              "supervisor of the trading team"
            ]
          },
          stage2: {
            header: "2007-2009: Vladprodimport - distribution, wholesale",
            subheader: "",
            listHeader: "Position",
            listContext: [
              "trading agent",
              "supervisor of the trading team"
            ]
          },
          stage1: {
            header: "2000 – 2007: Educator-psychologist, Smorgon Social and Pedagogical Center",
          }
        }
      }
    ],
    portfolio: [],
  },
});

export default slice.reducer;
