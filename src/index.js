import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMe from "./components/routes/AboutMe";
import Portfolio from "./components/routes/Portfolio";
import AboutMeSection from "./components/routes/aboutMeSection/AboutMeSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store"
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="aboutme" element={<AboutMe />}>
              <Route
                index
                element={
                  <main className="main-content">
                    <p>Select a section</p>
                  </main>
                }
              />
              <Route path=":aboutMeSectionId" element={<AboutMeSection />} />
            </Route>
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
