import React from "react";
import { Link, To } from "react-router-dom";
import { MdClose } from "react-icons/md";

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
          <MdClose />
        </button>
        <div ref={ref} className="menu-list__wrapper">
          <div className="menu-list">
            <ListItem to={"/gaveonsker"} name="Gaveønsker" setOpen={setOpen} />
            <ListItem to={"/"} name="Helgeprogram" setOpen={setOpen} />
            <ListItem to={"/"} name="Bryllupsdagen" setOpen={setOpen} />
            <ListItem to={"/"} name="Overnatting" setOpen={setOpen} />
            <ListItem to={"/"} name="Kontaktinfo" setOpen={setOpen} />
            <ListItem to={"/"} name="Forside" setOpen={setOpen} />
          </div>
        </div>
      </>
    );
  }
);

type ListItemProps = {
  name: string;
  to: To;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListItem = ({ name, to, setOpen }: ListItemProps) => {
  return (
    <Link className="menu-list__item" to={to} onClick={() => setOpen(false)}>
      {name}
    </Link>
  );
};
