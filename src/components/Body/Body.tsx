import { useAppContext } from "@/context";
import React from "react";
import "./style.css";
import { AboutMe, Articles } from "./components";

export interface BodyProps {}

const Body: React.FC<BodyProps> = ({}) => {
  const { themeSelected } = useAppContext();

  return <div className="body">{!!themeSelected ? <Articles /> : <AboutMe />}</div>;
};

export default Body;
