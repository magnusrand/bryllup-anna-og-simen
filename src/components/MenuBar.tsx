import React, { useState } from "react";
import { Link, To } from "react-router-dom";
// import type { Page } from "../App";
import { CgMenuCake } from "react-icons/cg";
import { BsBookHalf } from "react-icons/bs";
import { RiHotelBedFill } from "react-icons/ri";

import "./MenuBar.css";

type MenuBarProps = {
  activeElement: string;
};

export const MenuBar = ({ activeElement }: MenuBarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <div className={`menu-list__container`}>Items</div>}
      <nav className={`${open ? "nav--open" : ""}`}>
        <MenuBaritem
          type="button"
          name="Meny"
          onClick={() => setOpen(!open)}
          icon={<CgMenuCake size={"1.75rem"} />}
        />
        <MenuBaritem
          type="link"
          name="Program"
          to={"/program"}
          icon={<BsBookHalf size={"1.25rem"} />}
        />
        <MenuBaritem
          type="link"
          name="Overnatting"
          to={"/overnatting"}
          icon={<RiHotelBedFill size={"1.25rem"} />}
        />
      </nav>
    </>
  );
};

type MenuBaritemProps = {
  type: "link" | "button";
  to?: To;
  onClick?: () => void;
  name?: string;
  children?: React.ReactNode;
  icon?: any;
  className?: string;
};

const MenuBaritem = ({
  type,
  to,
  onClick,
  name,
  icon,
  children,
  className,
}: MenuBaritemProps) => {
  const content = (
    <>
      <div className="menubar__item__icon-container">{icon}</div>
      {name}
    </>
  );

  const linkWrapper = (
    <>
      {to && (
        <Link
          className={`menubar__item__container menubar__item__link ${className}`}
          to={to}
        >
          {content}
        </Link>
      )}
    </>
  );

  const buttonWrapper = (
    <button
      className={`menubar__item__container menubar__item__button ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );

  if (type === "link") return <>{linkWrapper}</>;
  if (type === "button") return <>{buttonWrapper}</>;
  else return <></>;
};
