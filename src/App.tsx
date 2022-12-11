import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { LandigPage } from "./pages/LandingPage";
import { GiftListPage } from "./pages/GiftListPage";

import "./App.css";

export type Page = "/" | "/gaveonsker" | "/kontakt-oss" | "program";

function App() {
  const currentPath = useLocation();
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="/gaveonsker" element={<GiftListPage />} />
        </Routes>
      </div>
      <Menu activeElement={currentPath.pathname} />
    </div>
  );
}

export default App;
