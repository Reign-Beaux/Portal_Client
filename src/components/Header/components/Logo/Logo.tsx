import { useAppContext } from "@/context";
import { LOGO } from "common/static";
import React from "react";

export interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  const { setThemeSelected } = useAppContext();

  const handleClick = () => setThemeSelected("");

  return <img src={LOGO} height={50} onClick={handleClick} style={{ cursor: "pointer" }} />;
};

export default Logo;
