import { useAppContext } from "@/context";
import React from "react";
import "./style.css";

export interface BodyProps {}

const Body: React.FC<BodyProps> = ({}) => {
  const { themeSelected } = useAppContext();

  return <div className="body">{themeSelected}</div>;
};

export default Body;
