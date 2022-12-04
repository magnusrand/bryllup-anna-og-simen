import { Link } from "../components/Link";

export const GiftListPage = () => {
  return (
    <div className="gaveonsker__content">
      <div className="gaveonsker__header-header">
        <h1 className="gaveonsker__header-text">Gaveønsker</h1>
      </div>
      <h2 className="gaveonsker__description">Lenker til gavelister</h2>
      <Link href="https://www.kitchn.no/">Kitchn</Link>
      <Link href="https://www.kitchn.no/">Jernbanemuseet</Link>
    </div>
  );
};
