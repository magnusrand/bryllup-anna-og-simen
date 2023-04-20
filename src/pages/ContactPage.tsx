import { BiPhone } from "react-icons/bi";
import { Header } from "../components/Menu/Header";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <div className="contact__content">
      <Header>Kontaktinfo</Header>
      <div className="normal-text">
        <p>
          Vi kan kontaktes på telefon hva enn det måtte være! <br />
          Anna{" "}
          <a href="tel:+4794037959">
            <BiPhone />
            94037959
          </a>{" "}
          <br />
          Simen{" "}
          <a href="tel:+4797114979">
            <BiPhone />
            97114979
          </a>
        </p>
        <p>
          Toastmaster Julia kan kontaktes på telefon{" "}
          <a href="tel:+4745402409">
            <BiPhone />
            454 02 409
          </a>
          . Ved spørsmål om teknisk utstyr eller lignende i lokalet kan Reidar
          Jensen (brudens far) kontaktes på telefon{" "}
          <a href="tel:+4793234988">
            <BiPhone />
            932 34 988
          </a>
          .
        </p>
        <p>Håper vi sees i juni!!!</p>
      </div>
    </div>
  );
};
