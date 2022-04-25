import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioSection from "./PortfolioSection/PortfolioSection";

const PortfolioLinks = () => {
  let portfolioSections = useSelector((state) => state.state.portfolio);

  return (
    <div className="nav-links">
      <nav>
      {portfolioSections.map((portfolioSection) => (
          <NavLink
            className="nav-link"
            to={`/portfolio/${portfolioSection.id}`}
            key={portfolioSection.id}
          >
            {portfolioSection.projectName}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default PortfolioLinks;