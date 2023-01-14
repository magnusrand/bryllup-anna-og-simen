import { Header } from "../components/Menu/Header";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <div className="contact__content">
      <Header>Kontaktinfo</Header>
      <div className="normal-text">
        <p>
          Vi kan kontaktes på telefon hva enn det måtte være! <br />
          Anna <a href="tel:+4794037959"> 94037959</a> <br />
          Simen <a href="tel:+4797114979"> 97114979</a>
        </p>
        <p>
          Det vil også komme kontaktinformasjon til toastmaster nærmere
          bryllupet. Dersom det er noen spørsmål om lokale eller lignende kan
          arrangør, Kristin og Steven, kontaktes på kristin@skafferiethansen.net
        </p>
        <p>Håper vi sees i juni!!!</p>
      </div>
    </div>
  );
};
