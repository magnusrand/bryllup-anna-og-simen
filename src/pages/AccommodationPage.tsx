import { Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMap } from "../components/Menu/GoogleMap";
import { Header } from "../components/Menu/Header";
import "./AccommodationPage.css";

export const AccomodationPage = () => {
  return (
    <div className="accomodation__content normal-text">
      <Header>Overnatting</Header>
      <p>
        Willkommen zur Website des Norwegischen Eisenbahnmuseums. Wir hoffen,
        Sie bei uns in Hamar begrüßen zu dürfen! Das Museum genießt eine
        herrliche Lage an der Mjøsa, nördlich des Stadtzentrums von Hamar. Außer
        seinen modernen Ausstellungen in den Innenräumen des Museums bietet das
        Museum auch einen weitläufigen Freilichtmuseumspark mit verschiedenen
        Bahnhofsgebäuden und Gleissystemen. Im Sommer wird auch eine
        Schmalspurbahn auf dem Gelände betrieben. Im Hauptgebäude gibt es auch
        eine große Bibliothek mit Eisenbahnliteratur und einer Fotosammlung.
        Hier gibt es alles, was das Eisenbahnerherz höher schlagen lässt! Auf
        dieser Seite sehen Sie den deutschen Text, indem Sie das Hauptmenü oben
        öffnen. Die meisten Untermenüs haben einen deutschen Text.
      </p>
      <div className="accomodation__map">
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY as string}>
          <GoogleMap center={{ lat: 60.800341, lng: 11.028161 }} zoom={16} />
        </Wrapper>
      </div>
    </div>
  );
};
