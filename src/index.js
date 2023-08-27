import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMeLinks from "./components/routes/AboutMeLinks";
import PortfolioLinks from "./components/routes/PortfolioLinks";
import AboutMeSection from "./components/routes/aboutMeSection/AboutMeSection";
import PortfolioSection from "./components/routes/PortfolioSection/PortfolioSection";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "./i18n";
import { useTranslation } from "react-i18next";

const RootComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <App />
                </Suspense>
              }
            >
              <Route path="aboutme" element={<AboutMeLinks />}>
                <Route
                  index
                  element={
                    <main className="main-content">
                      <p>
                        {i18n.language === "en"
                          ? "Select a section"
                          : "Выберите раздел"}
                      </p>
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
                      <p>{i18n.language === "en"
                          ? "Select a section"
                          : "Выберите раздел"}</p>
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
};

const root = createRoot(document.getElementById("root"));
root.render(<RootComponent />);
