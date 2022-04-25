import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMeLinks from "./components/routes/AboutMeLinks";
import PortfolioLinks from "./components/routes/PortfolioLinks";
import AboutMeSection from "./components/routes/aboutMeSection/AboutMeSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
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
            <Route path="portfolio" element={<PortfolioLinks />} />
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
    </BrowserRouter>
  </React.StrictMode>
);
