import { Header } from "../components/Menu/Header";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <div className="contact__content">
      <Header>Kontaktinfo</Header>
      <h2 className="section-heading">Ikke noe her … enda</h2>
      <div className="normal-text">
        <p>
          Han har den fineste vogna på campingplassen <br />
          Vogna mi den kallarn utedassen <br />
          Forteltet han har er aller størst <br />
          Og det var han som kjøpte gassgrill først
        </p>
        <p>
          Je har ei lita vogn fra nitten seks og åtti <br />
          Bærbar do en såkalt portapotty <br />
          Men campingtur er kjett uten cash <br />
          Så je har penger dårlig vogn og tømmer bæsj <br />
          Ja campingtur er kjett uten cash <br />
          Så jeg har penger dårlig vogn og tømmer bæsj
        </p>
        <p>
          Han har det dyreste feteste partyteltet og største plattingen på hele
          feltet <br />
          Men aldri er det noen andre der for han bære skryt og er så svær
        </p>
      </div>
    </div>
  );
};
