import React from "react";

export interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
    decoration?: "none" | "underline"
  }

const CustomLink: React.FC<CustomLinkProps> = ({ children = "underline", decoration, ...rest }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: decoration, margin: "0 5px", fontSize: "1.3rem" }}
      {...rest}>
      {children}
    </a>
  );
};

export default CustomLink;
