import { useAppContext } from "@/context";
import { CustomButtonIcon, CustomLink } from "common/components";
import { Url } from "common/static";
import React from "react";

export interface SocialNetworksProps {}

const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  const { isDarkTheme, setIsDarkTheme } = useAppContext();

  const handleChangeTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <CustomLink href={Url.YOUTUBE}>
        <i className="fa-brands fa-youtube"></i>
      </CustomLink>
      <CustomLink href={Url.LINKEDIN}>
        <i className="fa-brands fa-linkedin-in"></i>
      </CustomLink>
      <CustomButtonIcon onClick={handleChangeTheme}>
        {isDarkTheme ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
      </CustomButtonIcon>
    </div>
  );
};

export default SocialNetworks;
