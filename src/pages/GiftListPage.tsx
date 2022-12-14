import { Link } from "../components/Link";
import { Header } from "../components/Menu/Header";
import "./GiftListPage.css";

export const GiftListPage = () => {
  return (
    <div className="gaveonsker__content">
      <Header>Gaveønsker</Header>
      <h2 className="gaveonsker__description responsive-normal-text">
        lenker til gavelister
      </h2>
      <Link href="https://www.kitchn.no/">Kitch'n</Link>
      <Link href="https://jernbanemuseet.no/billettpriser/">
        Jernbanemuseet
      </Link>
      <Link href="https://www2.hm.com/no_no/customer-service/gavekort/gavekort.html">
        H&M gavekort
      </Link>
    </div>
  );
};
