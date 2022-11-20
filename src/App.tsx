import React from "react";
import { LandigPage } from "./pages/LandingPage";

import "./App.css";
import { MenuBar } from "./components/MenuBar";
import { Routes, Route, useLocation } from "react-router-dom";

export type Page = "/" | "/gaveonsker" | "/kontakt-oss" | "program";

function App() {
  const currentPath = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandigPage />} />
      </Routes>
      <MenuBar activeElement={currentPath.pathname} />
    </div>
  );
}

export default App;
