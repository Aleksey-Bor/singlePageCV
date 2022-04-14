import { configureStore } from "@reduxjs/toolkit";
import initialStateCreator from "./features/initialStateCreator";

export default configureStore({
  reducer: {
    counter: initialStateCreator,
  },
});
