import React from "react";

export interface CustomDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomDialogFooter: React.FC<CustomDialogFooterProps> = ({ children, ...rest }) => {
  return (
    <div style={{ textAlign: "end", marginTop: "15px" }} {...rest}>
      {children}
    </div>
  );
};

export default CustomDialogFooter;
