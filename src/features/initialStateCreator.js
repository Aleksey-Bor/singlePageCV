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
      },
    ],
    portfolio: [],
  },
});

export default slice.reducer;
