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
        englishLevelMarker: "A2",
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
              "Website development using HTML, CSS and JS",
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
      {
        sectionName: "Additionally",
        id: 5,
        linkLabel: "My Github",
        linkUrl: "https://github.com/Aleksey-Bor,",
        listHeader: "Professional interests:",
        context: [
          "All about Front-end Science",
          "A little about the Back-end (I hope I like it too)",
          "YoTube: IT-INCUBATOR | IT-KAMASUTRA",
          "RS School",
          "IT-Academy",
          "Dev.by",
          "and other",
        ],
        label: "Military obligation status",
        addInform: "I completed my compulsory military service in 2001-2002",
      },
    ],
    portfolio: [
      {
        sectionName: "Social Network",
        id: 1,
        projectUrl: "",
        context:
          "I use this project to get the knowledge needed to work with React.*",
        notes:
          "*- Responsive design is not a priority at this stage and will be added at the end of the project.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: [
          "Installing React",
          "SPA",
          "CSS modules",
          "Routing and react-router-dom library",
          "FLUX",
          "REDUX and react-redux library",
          "props",
          "callback, subscribe, observer",
          "action creator, action type",
          "reducer",
          "connect, mapSTateToProps, mapDispatchToProps",
          "REST API",
          "Functional and Class Components",
          "Presentation and Container Component",
          "life circle methods",
          "Hooks",
          "HOC",
          "AJAX",
          "DAL",
          "axios",
          "Redux-thunk",
          "Redirect, React.lazy, React.Suspense",
          "Typing in React and TypeScript",
          "Deploy React App to GitHub-pages",
          "and other",
        ],
      },
    ],
  },
});

export default slice.reducer;
