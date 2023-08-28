import { createSlice } from "@reduxjs/toolkit";
import socialNetworkScreen from "../assets/social_network.jpg";
import retoartScreen from "../assets/retoart.jpg";
import clockScreen from "../assets/clock.jpg";
import ticTacToeScreen from "../assets/tic_tac.jpg";
import calculatorScreen from "../assets/calculator.jpg";
import fifteenGameScreen from "../assets/fifteen_game.jpg";
import logoItSchool from "../assets/logo.png";

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
          "SASS / SCSS",
          "JS / TypeScript basics",
          "React / Redux",
          "jQuery",
          "Bootstrap",
          "Webpack basics",
          "NodeJS basics",
          "Git / GitHub",
        ],
        englishLevelCertificate: "https://www.efset.org/cert/ejY1ta",
        englishLevelMarker: "A2",
      },
      {
        sectionName: "Work experience",
        id: 3,
        context: {
          stage5: {
            header:
              "May 2022 - February 2023: I developed and taught my own online course \"IT-School: WEBSITE DEVELOPMENT BASICS\"",
            subheader:
              'You can see some of my projects in the "Portfolio" section of this resume.',
            id: 5,
          },
          stage5: {
            header:
              'May 2022 - February 2023: I developed and taught my own online course "IT-School: WEBSITE DEVELOPMENT BASICS"',
            subheader:
              "You can find this and some of my other projects in the Portfolio section of this CV.",
            id: 5,
          },
          stage4: {
            header: "April 2020 - Today: I am self-taught web development.",
            subheader:
              'You can see some of my projects in the "Portfolio" section of this resume.',
            id: 4,
          },
          stage3: {
            header: "2009 – 2022: Individual entrepreneur",
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
            header: "April 2020 – today: Self-taught web development.",
            listHeader: "Used sources",
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
              "2021 - today: I'm learning English on my own with YouTube courses - English with playlists",

            id: 3,
          },
          stage2: {
            header:
              "August 2019 - March 2020: Studied, Educational Center for Programming and High Tech (IT-Academy)",
            listHeader: "Courses",
            listContext: [
              "Website development using HTML, CSS and JS",
              "Development of web applications on Java Script",
            ],
            id: 2,
          },
          stage1: {
            header:
              "2000: Graduated from the Belarusian State Pedagogical University",
            subheader: "Faculty: Natural Science",
            listHeader: "Specialty",
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
        linkUrl: "https://github.com/Aleksey-Bor",
        listHeader: "Professional interests:",
        context: [
          "All about frontend development",
          "A bit about the backend (I hope I like it too)",
          "YouTube: IT INCUBATOR | and many other resources",
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
        sectionName: "IT-School: WEBSITE DEVELOPMENT BASICS",
        id: 7,
        context:
          "Online School: IT-School is my attempt to share basic knowledge on the topic of web development. Since my diploma profession is a teacher, I believe that I can make good courses for beginners. The first course of my project is the Fundamentals of Website Building. Now this project is frozen, but I want to return to it someday with new inspiration and new knowledge.*",
        notes:
          "* - I will be very happy if you visit YouTube or Boosty project. You can go to them from the business card site.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: [
          "a little React",
          "a little Redux",
          "a little HTML, CSS",
          "a little Bootstrap",
          "a little pure JS",
          "And a lot of my soul :)",
        ],
        projectUrl: "https://itka-school.github.io/it-school-web/",
        Interest: "",
        screen: logoItSchool,
      },
      {
        sectionName: "Social Network",
        id: 6,
        context:
          "I used this project to get the knowledge needed to work with React.*",
        notes:
          "*- At this stage of project development, adaptive design is not a priority. The project was used to teach React related concepts",
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
          "connect, mapStateToProps, mapDispatchToProps",
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
          "Redux-form ;)",
          "Redirect, React.lazy, React.Suspense",
          "Typing in React and TypeScript",
          "Deploy React App to GitHub-pages",
          "and other",
        ],
        projectUrl: "https://aleksey-bor.github.io/social_network/#/login",
        login: "free@samuraijs.com",
        password: "free",
        Interest:
          "Try editing your profile. Enter incorrect data in the forms.",
        screen: socialNetworkScreen,
      },
      {
        sectionName: "RETOART",
        id: 5,
        context:
          "RETOART - is my first work that I did completely by myself in February 2020. Everything from design to content was created by me. It was a real business card site for real-life photo retouchers.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: [
          "Basic knowledge of CSS and HTML",
          "Responsive Design and Media Expressions",
          "CSS Hierarchical Selectors",
          "CSS animation",
          "Block and Flex layout",
          "Creating simple sliders with Javascript",
          "and other",
        ],
        projectUrl:
          "https://aleksey-bor.github.io/retoart/index.html#StartHome",
        Interest:
          'Hover your mouse over the photo retouching examples in the \"Услуги\" section to see an interesting animation solution on pure CSS. Change the width of the browser window to see how the site design changes.',
        screen: retoartScreen,
      },
      {
        sectionName: "Clock",
        id: 4,
        context:
          "This is a watch with synchronized analog and digital dials. If you download them in your browser on New Year's Eve, you will be in for a surprise.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: [
          "DOM",
          "Object Oriented Programming",
          "Date object",
          "Date Constructor",
          "Scheduling: setInterval",
          "DOM animation",
          "and other",
        ],
        projectUrl: "https://aleksey-bor.github.io/clock/",
        Interest:
          "The watch brand is a link, by clicking on it you can see information about another project of their author :))",
        screen: clockScreen,
      },
      {
        sectionName: "Tic Tac Toe",
        id: 3,
        context:
          "With the help of this game, I first got acquainted with React.*",
        notes: "* - The application works correctly only on the Desktop.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: [
          "Installing React",
          "Class Components",
          "props",
          "callback",
          "Component lifecycle",
          "Component state and state management",
          "and other",
        ],
        projectUrl: "https://aleksey-bor.github.io/React_tic_tac-toe/",
        Interest:
          "Check how correctly the game determines the winner. With move logging, you can always undo a move if you want.",
        screen: ticTacToeScreen,
      },
      {
        sectionName: "Calculator",
        id: 2,
        context:
          "Pre-made spreadsheet layout livened up with calculator functionality*",
        notes:
          "* - Since the start layout is made in the form of a rigid table, the application is displayed correctly only on the desktop.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: ["DOM", "Functional programming", "and other"],
        projectUrl:
          "https://rolling-scopes-school.github.io/aleksey-bor-JS2020Q3/calculator/",
        Interest:
          "It was very interesting to solve the problem of correct calculations with negative numbers and decimal fractions, raising a number to a power, extracting a square root.",
        screen: calculatorScreen,
      },
      {
        sectionName: "Fifteen Game",
        id: 1,
        context:
          'This is the famous "Fifteen" puzzle, where the chips should be arranged sequentially from the chip with the smallest value to the chip with the largest value.*',
        notes: "* - The application works correctly only on the Desktop.",
        skilLsLabel:
          "The following skills and concepts were applied in the project",
        skillsList: [
          "DOM",
          "DOM animation",
          "bubbling, sinking, and event delegation",
          "Drag-and-drop elements",
          "and other",
        ],
        projectUrl: "https://puzle15.alieksieiborko1.repl.co/",
        Interest:
          "It was very interesting to implement that the chips were moved simultaneously by dragging and dropping and by clicking. It was also necessary to solve the problem so that the chips distributed randomly fell into the DOM only in a combination that can be solved.",
        screen: fifteenGameScreen,
      },
    ],
  },
});

export default slice.reducer;
