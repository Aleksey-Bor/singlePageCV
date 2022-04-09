import "./App.css";
import BusinessCard from "./components/BusinessCard";
import Objective from "./components/Objective";
import AppNavbar from "./components/AppNavbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BusinessCard />
      <Objective />
      <AppNavbar />
      <Outlet />
    </div>
  );
}

export default App;
