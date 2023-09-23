import React from "react";
import "./style.css";

export interface CustomDialogProps {
  children: React.ReactNode;
  open: boolean;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ children, open }) => {
  return <>{open && <div className="custom-dialog">{children}</div>}</>;
};

export default CustomDialog;
