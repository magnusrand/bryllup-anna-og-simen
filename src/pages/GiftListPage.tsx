import { Link } from "../components/Link";
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
          derfor opprettet gaveliste på nett.
        </p>
        <Link href="https://www.tilbords.no/onskeliste/109585">Tilbords</Link>
        <Link href="https://www.illumsbolighus.no/on/demandware.store/Sites-illums_bolighus_no-Site/nb_NO/GiftRegistry-ShowOthers?id=c805ee672979b3e79bae40ce83">
          Illums Bolighus
        </Link>
        <p>
          Like kjært som gaver fra ønskelisten er et bidrag til bryllupsreise.
          Vi har opprettet en reisekonto med kontonummer 1440 30 68811, og
          gleder oss til en fantastisk Italiatur!
        </p>
      </div>
    </div>
  );
};
