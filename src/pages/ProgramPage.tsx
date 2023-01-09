import { Link } from "react-router-dom";
import { Header } from "../components/Menu/Header";
import "./ProgramPage.css";

export const ProgramPage = () => {
  return (
    <div className="program__content">
      <Header>Helgeprogram</Header>
      <h2 className="section-heading">Bli-kjent-fredag</h2>
      <div className="normal-text">
        <p>
          Når vi først får samlet alle vi er så glade i, ønsker vi så mye tid
          med dere som mulig! Alle som ønsker er hjertelig velkommen hjem til
          oss på fredag ettermiddag for en liten bli-kjent fest. Det vil bli
          enkel matservering, og vi setter stor pris på om dere tar med litt
          drikke til fellesskapet.
        </p>

        <p>
          Dere er velkommen til oss i Steenbergs gate 31 fredag 9. juni fra
          klokken 18.00. Da brura trenger skjønnhetssøvnen sin avslutter vi
          kvelden rundt 22.00.
        </p>
      </div>
      <h2 className="section-heading">Bryllupsdagen</h2>
      <div className="normal-text">
        <p>
          Bryllupsdagen 10. juni starter med vielse i Hamar Domkirke klokken
          14.00. Vi er så heldig å bli viet av en familievenn, Torstein Holten,
          og gleder oss til å dele øyeblikket med dere.
        </p>

        <p>
          Etter kirken er det ordnet med felles transport fra kirken til
          Hovinsholm gård på Helgøya. Bussturen tar omtrent 40 minutter.
        </p>
        <p>
          Resten av dagen blir en feiring av kjærleiken med god mat og drikke,
          underholdning, dans og en skikkelig fest! Vi setter veldig stor pris
          på fine og underholdende bidrag i løpet av kvelden.Info om hvem som
          blir kveldens toastmaster kommer.
        </p>
        <p>
          Det vil bli felles transport tilbake til Hamar klokken 03.00. Bussene
          vil stoppe på Ajer, Scandic Hamar og et stopp i Bekkelaget.
        </p>
        <p>
          Dersom dere har noen spørsmål om dagen er det bare å{" "}
          <Link to="/kontaktinfo">ta kontakt!</Link>
        </p>
      </div>
    </div>
  );
};
