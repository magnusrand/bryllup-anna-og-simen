import React from "react";
import { Link, To } from "react-router-dom";

type MenuListProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  ({ open, setOpen }, ref) => {
    return (
      <>
        <button
          className="menu-list__close-button"
          onClick={() => setOpen(false)}
          aria-label="Lukk meny"
        >
          X
        </button>
        <div ref={ref} className="menu-list__container">
          <ListItem to={"/gaveonsker"} name="Gaveønsker" />
          <ListItem to={"/"} name="Helgeprogram" />
          <ListItem to={"/"} name="Bryllupsdagen" />
          <ListItem to={"/"} name="Overnatting" />
          <ListItem to={"/"} name="Kontaktinfo" />
          <ListItem to={"/"} name="Forside" />
        </div>
      </>
    );
  }
);

type ListItemProps = {
  name: string;
  to: To;
};

const ListItem = ({ name, to }: ListItemProps) => {
  return (
    <Link className="menu-list__item" to={to}>
      {name}
    </Link>
  );
};
