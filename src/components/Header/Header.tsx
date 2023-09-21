import React from "react";
import "./style.css";
import { Logo, ReferenceSites, SocialNetworks } from "./components";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <Logo />
      <ReferenceSites />
      <SocialNetworks />
    </header>
  );
};

export default Header;
