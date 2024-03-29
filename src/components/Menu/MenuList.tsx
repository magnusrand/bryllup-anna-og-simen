import React from "react";
import { Link, To, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";

type MenuListProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseButtonClick: () => void;
};

export const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  ({ setOpen, onCloseButtonClick }, ref) => {
    return (
      <>
        <button
          className="menu-list__close-button"
          onClick={onCloseButtonClick}
          aria-label="Lukk meny"
        >
          <MdClose />
        </button>
        <div ref={ref} className="menu-list__wrapper">
          <div className="menu-list">
            <ListItem to={"/"} name="Forside" setOpen={setOpen} />
            <ListItem
              to={"/helgeprogram"}
              name="Helgeprogram"
              setOpen={setOpen}
            />
            <ListItem
              to={"/overnatting"}
              name="Overnatting"
              setOpen={setOpen}
            />
            <ListItem to={"/gaveonsker"} name="Gaveønsker" setOpen={setOpen} />
            <ListItem
              to={"/kontaktinfo"}
              name="Kontaktinfo"
              setOpen={setOpen}
            />
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
  const location = useLocation();
  console.log(to);

  const classNames =
    location.pathname === to
      ? "menu-list__item menu-list__item--selected"
      : "menu-list__item";

  return (
    <Link className={classNames} to={to} onClick={() => setOpen(false)}>
      {name}
    </Link>
  );
};
