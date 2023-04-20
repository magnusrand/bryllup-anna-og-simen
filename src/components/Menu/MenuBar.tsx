import React from "react";
import { Link, To, useLocation } from "react-router-dom";
import { CgMenuCake } from "react-icons/cg";
import { BsBookHalf } from "react-icons/bs";
import { BiBed } from "react-icons/bi";

import "./Menu.css";

type MenuBarProps = {
  activeElement: string;
  open: boolean;
  menuButtonRef: any;
  onMenuButtonClick: () => void;
};

export const MenuBar = ({
  activeElement,
  open,
  menuButtonRef,
  onMenuButtonClick,
}: MenuBarProps) => {
  return (
    <div className="menubar__background">
      <MenuBaritem
        type="button"
        name="Meny"
        onClick={onMenuButtonClick}
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
        name="Helgeprogram"
        to={"/helgeprogram"}
        icon={<BsBookHalf size={"1.25rem"} aria-hidden="true" />}
      />
      <MenuBaritem
        type="link"
        name="Overnatting"
        to={"/overnatting"}
        icon={<BiBed size={"1.25rem"} aria-hidden="true" />}
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
  const location = useLocation();
  const active = location.pathname === to;

  const content = (
    <>
      <span className="menubar__item__icon-container">{icon}</span>
      <span className="menubar__item__text">{name}</span>
    </>
  );

  const linkWrapper = (
    <>
      {to && (
        <Link
          className={`menubar__item__container menubar__item__link ${
            active ? "menubar__item--active" : ""
          } ${className}`}
          to={to}
        >
          {content}
        </Link>
      )}
    </>
  );

  const buttonWrapper = (
    <button
      className={`menubar__item__container menubar__item__button ${
        active ? "menubar__item--active" : ""
      } ${className}`}
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
