import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Menu/Header";

import "./LandingPage.css";

export const LandigPage = () => {
  return (
    <div className="landing-page__wrapper">
      <div className="landing-page__content normal-text">
        <Header>
          <img
            className="landing-page__header-image"
            src={"/header.webp"}
            alt="Bilder av Anna og Simen"
          />
        </Header>
        <h2 className="section-heading disable-animation">Vi gifter oss!</h2>
        <p>
          Vi har den store gleden av å invitere venner og familie til
          bryllupsfest 10. juni 2023 på Hamar!
        </p>
        <p>
          Etter 12 år som kjærester er det på tide med en ring på fingeren, og
          vi gleder oss masse til å dele den store dagen med dere! Vi har laget
          et program for helgen og samlet litt nyttig informasjon som dere kan
          finne i menyen på bunnen.
        </p>
        <p>
          Vi ser frem til en helg fylt med alle vi er så glade i og en skikkelig
          feiring av kjærligheten!! Mer informasjon om kvelden og toastmaster
          finnes på <Link to="/helgeprogram">helgeprogramsiden</Link> i menyen.
        </p>
        <p>
          Dersom dere har noen spørsmål eller innspill, ta kontakt med oss.
          Kontaktinformasjon er tilgjengelig på{" "}
          <Link to="/kontaktinfo">kontaktinfo-siden</Link> i menyen. Svar
          utbedes 1. april til en av oss – både for fredag og lørdag. Gi oss
          også beskjed dersom det er noen forbehold som må tas i forbindelse med
          matservering.
        </p>
        <p>
          Siden vil bli oppdatert fortløpende frem mot bryllupsdagen. Håper vi
          sees i juni ♥️
        </p>
        <p>Mange klemmer fra Anna og Simen</p>
      </div>
    </div>
  );
};
