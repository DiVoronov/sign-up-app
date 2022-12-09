import React from "react";
import { ReactComponent as ChadLogo } from "./ChadLogo.svg";
import { Header } from "../Header/Header";
import { StyledChadLogoHeader } from "./ChadLogoHeader.style";

export const ChadLogoHeader = ( ) => {

  return (
    <StyledChadLogoHeader>
      <ChadLogo/>
      <Header title="Chad"/>
    </StyledChadLogoHeader>
  );
};
