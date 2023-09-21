import React from "react";
import "./style.css";

export interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
  return <button className="custom-button" {...rest}>{children}</button>;
};

export default CustomButton;
