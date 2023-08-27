import "./App.css";
import BusinessCard from "./components/BusinessCard";
import Objective from "./components/Objective";
import AppNavbar from "./components/AppNavbar";
import { Outlet } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";

const TranslatedObjective = withTranslation()(Objective);
const TranslatedAppNavbar = withTranslation()(AppNavbar);

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("ru")
      : i18n.changeLanguage("en");
  };

  return (
    <div className="App">
      <BusinessCard />
      <section className="locales">
        <button onClick={() => changeLanguage()}>
          {i18n.language === "en" ? "РУС" : "ENG"}
        </button>
      </section>
      <TranslatedObjective />
      <TranslatedAppNavbar />
      <Outlet />
    </div>
  );
}

export default App;
