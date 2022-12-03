import React from "react";
import { Link, To } from "react-router-dom";
import { CgMenuCake } from "react-icons/cg";
import { BsBookHalf } from "react-icons/bs";
import { RiHotelBedFill } from "react-icons/ri";

import "./Menu.css";

type MenuBarProps = {
  activeElement: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuButtonRef: any;
};

export const MenuBar = ({
  activeElement,
  open,
  setOpen,
  menuButtonRef,
}: MenuBarProps) => {
  return (
    <div className="menubar__background">
      <MenuBaritem
        type="button"
        name="Meny"
        onClick={() => setOpen(!open)}
        open={open}
        icon={
          <CgMenuCake
            size={"1.75rem"}
            style={{ position: "relative", bottom: "0.2rem" }}
            aria-hidden="true"
          />
        }
        menuButtonRef={menuButtonRef}
      />
      <MenuBaritem
        type="link"
        name="Program"
        to={"/program"}
        icon={<BsBookHalf size={"1.25rem"} aria-hidden="true" />}
      />
      <MenuBaritem
        type="link"
        name="Overnatting"
        to={"/overnatting"}
        icon={<RiHotelBedFill size={"1.25rem"} aria-hidden="true" />}
      />
    </div>
  );
};

type MenuBaritemProps = {
  type: "link" | "button";
  to?: To;
  onClick?: () => void;
  name?: string;
  open?: boolean;
  menuButtonRef?: any;
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
  open = false,
  menuButtonRef,
  children,
  className,
}: MenuBaritemProps) => {
  const content = (
    <>
      <span className="menubar__item__icon-container">{icon}</span>
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
      aria-expanded={open}
      ref={menuButtonRef}
    >
      {content}
    </button>
  );

  if (type === "link") return <>{linkWrapper}</>;
  if (type === "button") return <>{buttonWrapper}</>;
  else return <></>;
};
