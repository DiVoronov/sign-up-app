import React from "react";
import { Box } from "@mui/material";
import { StyledOnboardingComplete } from "./OnboardingComplete.style";

import { ReactComponent as OnboardingCompleteSVG } from "./svg/OnboardingComplete.svg";
import { Modal } from "./Modal";

interface IOnboardingCompleteProps {
  title: string
}

export const OnboardingComplete = ( { title }: IOnboardingCompleteProps ) => {

  return (
    <StyledOnboardingComplete>
      <OnboardingCompleteSVG/>
      <img />
      <span id="nameText"></span>
      <Modal title="ff"/>
    </StyledOnboardingComplete>
  );
};