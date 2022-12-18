import React, { useRef, useState } from "react";

import { MenuBar } from "./MenuBar";
import { MenuList } from "./MenuList";
import { useOnClickOutside } from "../../utils/useOnClickOutside";
import "./Menu.css";

type MenuProps = {
  activeElement: string;
};

export const Menu = ({ activeElement }: MenuProps) => {
  const [open, setOpen] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef(null);

  useOnClickOutside([listContainerRef, menuButtonRef], () => {
    animateMenuOut();
  });

  const handleOnMenuButtonClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      animateMenuOut();
    }
  };

  const animateMenuOut = () => {
    listContainerRef.current?.classList.add("menu-list__wrapper--animate-out");

    setTimeout(() => {
      listContainerRef.current?.classList.remove(
        "menu-list__wrapper--animate-out"
      );

      setOpen(false);
    }, 200);
  };

  return (
    <nav>
      <MenuBar
        open={open}
        activeElement={activeElement}
        menuButtonRef={menuButtonRef}
        onMenuButtonClick={handleOnMenuButtonClick}
      />
      {open && (
        <MenuList
          ref={listContainerRef}
          setOpen={setOpen}
          onCloseButtonClick={animateMenuOut}
        />
      )}
    </nav>
  );
};
