import React, { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Menu } from "./components/Menu/Menu";
import { useAddRevealListener } from "./utils/useAddRevealListener";
import { ScrollToTop } from "./utils/ScrollToTop";

import { LandigPage } from "./pages/LandingPage";
import { GiftListPage } from "./pages/GiftListPage";
import { AccomodationPage } from "./pages/AccommodationPage";
import { ProgramPage } from "./pages/ProgramPage";
import { ContactPage } from "./pages/ContactPage";

import "./App.css";

export type Page =
  | "/"
  | "/gaveonsker"
  | "/overnatting"
  | "/kontakt-oss"
  | "program";

function App() {
  const currentPath = useLocation();
  const contentRef = useRef(null);
  useAddRevealListener(contentRef, currentPath);

  return (
    <div className="App">
      <ScrollToTop scrollElement={contentRef} />
      <div className="content reveal-children" ref={contentRef}>
        <Routes>
          <Route path="/" element={<LandigPage />} />
          <Route path="/gaveonsker" element={<GiftListPage />} />
          <Route path="/overnatting" element={<AccomodationPage />} />
          <Route path="/helgeprogram" element={<ProgramPage />} />
          <Route path="/kontaktinfo" element={<ContactPage />} />
        </Routes>
      </div>
      <Menu activeElement={currentPath.pathname} />
    </div>
  );
}

export default App;
