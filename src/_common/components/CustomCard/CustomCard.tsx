import React from "react";
import "./style.css";

export interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomCard: React.FC<CustomCardProps> = ({children, ...rest}) => {
  return <div className="custom-card" {...rest}>{children}</div>;
};

export default CustomCard;
