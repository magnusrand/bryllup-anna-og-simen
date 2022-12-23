import { Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMap } from "../components/Menu/GoogleMap";
import { Header } from "../components/Menu/Header";
import "./AccommodationPage.css";

export const AccomodationPage = () => {
  return (
    <div className="accommodation__content normal-text">
      <Header>Overnatting</Header>
      <p>
        For de av dere som er i behov av overnatting er det flere gode
        muligheter i nærheten av både hjemmet vårt og kirken.
      </p>
      <p>
        VI har vært i kontakt med Scandic Hamar og allerede bestilt noen rom til
        rabattert pris. Si ifra dersom du eller dere ønsker å bo på Scandic for
        helgen, så kan vi forsøke å få tak i flere rom til denne prisen.
      </p>
      <p>Andre alternativer for helgen er Victoria Hotel og Astoria Hotel.</p>
      <div className="accommodation__map">
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY as string}>
          <GoogleMap center={{ lat: 60.795904, lng: 11.086711 }} zoom={16} />
        </Wrapper>
      </div>
    </div>
  );
};
