import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandigPage } from "./pages/LandingPage";
import { Menu } from "./components/Menu/Menu";

import "./App.css";

export type Page = "/" | "/gaveonsker" | "/kontakt-oss" | "program";

function App() {
  const currentPath = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandigPage />} />
      </Routes>
      <Menu activeElement={currentPath.pathname} />
    </div>
  );
}

export default App;
