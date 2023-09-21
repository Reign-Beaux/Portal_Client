import React from "react";

export interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = ({ children, ...rest }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", margin: "0 5px", fontSize: "1.3rem" }}
      {...rest}>
      {children}
    </a>
  );
};

export default CustomLink;
