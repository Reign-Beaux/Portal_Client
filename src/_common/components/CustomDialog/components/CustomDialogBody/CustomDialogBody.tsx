import React from "react";

export interface CustomDialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomDialogBody: React.FC<CustomDialogBodyProps> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default CustomDialogBody;
