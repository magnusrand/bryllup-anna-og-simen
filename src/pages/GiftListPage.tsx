import { Link } from "../components/Link";
import "./GiftListPage.css";

export const GiftListPage = () => {
  return (
    <div className="gaveonsker__content">
      <div className="gaveonsker__header-header">
        <h1 className="gaveonsker__header-text page-header">Gaveønsker</h1>
      </div>
      <h2 className="gaveonsker__description responsive-normal-text">
        lenker til gavelister
      </h2>
      <Link href="https://www.kitchn.no/">Kitch'n</Link>
      <Link href="https://www.kitchn.no/">Jernbanemuseet</Link>
    </div>
  );
};
