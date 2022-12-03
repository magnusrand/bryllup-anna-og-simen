import React, { useRef, useState } from "react";

import { MenuBar } from "./MenuBar";
import { MenuList } from "./MenuList";
import "./Menu.css";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

type MenuProps = {
  activeElement: string;
};

export const Menu = ({ activeElement }: MenuProps) => {
  const [open, setOpen] = useState(false);
  const listContainerRef = useRef(null);
  const menuButtonRef = useRef(null);
  useOnClickOutside([listContainerRef, menuButtonRef], () => setOpen(false));

  return (
    <nav className={`${open ? "nav--open" : ""}`}>
      <MenuBar
        open={open}
        setOpen={setOpen}
        activeElement={activeElement}
        menuButtonRef={menuButtonRef}
      />
      {open && (
        <MenuList ref={listContainerRef} open={open} setOpen={setOpen} />
      )}
    </nav>
  );
};
