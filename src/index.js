import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMeLinks from "./components/routes/AboutMeLinks";
import PortfolioLinks from "./components/routes/PortfolioLinks";
import AboutMeSection from "./components/routes/aboutMeSection/AboutMeSection";
import PortfolioSection from "./components/routes/PortfolioSection/PortfolioSection";
import { Routes, Route, HashRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="aboutme" element={<AboutMeLinks />}>
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
            <Route path="portfolio" element={<PortfolioLinks />}>
              <Route
                index
                element={
                  <main className="main-content">
                    <p>Select a section</p>
                  </main>
                }
              />
              <Route
                path=":portfolioSectionId"
                element={<PortfolioSection />}
              />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
