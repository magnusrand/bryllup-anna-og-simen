import React from "react";

import "./Link.css";

type LinkProps = {
  href: string;
  children?: React.ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="link responsive-normal-text">
      {children}
    </a>
  );
};
