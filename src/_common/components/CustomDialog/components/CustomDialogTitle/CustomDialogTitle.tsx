import React from "react";
import "./style.css";

export interface CustomDialogTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomDialogTitle: React.FC<CustomDialogTitleProps> = ({ children, ...rest }) => {
  return (
    <div className="custom-dialog-title" {...rest}>
      {children}
    </div>
  );
};

export default CustomDialogTitle;
