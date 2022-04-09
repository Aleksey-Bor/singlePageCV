import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

