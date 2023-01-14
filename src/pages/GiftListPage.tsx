import { Header } from "../components/Menu/Header";
import "./GiftListPage.css";

export const GiftListPage = () => {
  return (
    <div className="gaveonsker__content">
      <Header>Gaveønsker</Header>
      <div className="normal-text">
        <p>
          Vårt største ønske er at så mange som mulig av dere vil komme å feire
          dagen med oss!
        </p>
        <p>
          Vi har allerede blitt spurt om gaveønsker fra noen av dere og har
          derfor opprettet gaveliste på nett. Link til dette vil komme
          etterhvert!
        </p>
      </div>
    </div>
  );
};
