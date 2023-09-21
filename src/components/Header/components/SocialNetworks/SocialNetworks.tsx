import { CustomLink } from "common/components";
import { Url } from "common/static";
import React from "react";

export interface SocialNetworksProps {}

const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  return (
    <div>
      <CustomLink href={Url.YOUTUBE}>
        <i className="fa-brands fa-youtube"></i>
      </CustomLink>
      <CustomLink href={Url.LINKEDIN}>
        <i className="fa-brands fa-linkedin-in"></i>
      </CustomLink>
    </div>
  );
};

export default SocialNetworks;
