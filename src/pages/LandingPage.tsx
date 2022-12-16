import React from "react";

import "./LandingPage.css";

export const LandigPage = () => {
  return (
    <div className="landing-page__wrapper">
      <div className="landing-page__header-box page-header">
        <div>Anna</div>
        <div className="landing-page__header__ampersand">
          <div className="landing-page__header__line" />&
          <div className="landing-page__header__line" />
        </div>
        <div>Simen</div>
      </div>
      <div className="landing-page__content">
        Vi gifter oss! Og vi håper du vil være med oss og feire denne spesielle
        dagen ♥️
      </div>
    </div>
  );
};
