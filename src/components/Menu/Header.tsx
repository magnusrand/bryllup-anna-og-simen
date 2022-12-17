import { ReactNode } from "react";

import "./Header.css";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="bryllup__header-header">
      <h1 className="bryllup__header-content page-header">{children}</h1>
    </div>
  );
};
