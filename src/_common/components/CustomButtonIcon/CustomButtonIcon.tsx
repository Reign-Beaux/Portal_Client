import React from "react";
import "./style.css";

export interface CustomButtonIconProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const CustomButtonIcon: React.FC<CustomButtonIconProps> = ({ children, ...rest }) => {
  return (
    <div className="custom-cutton-icon-container">
      <button className="custom-button-icon" {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CustomButtonIcon;
