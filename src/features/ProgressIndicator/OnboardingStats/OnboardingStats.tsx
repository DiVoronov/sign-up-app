import React from "react";
import { Box } from "@mui/material";
import { StyledOnboardingStats } from "./OnboardingStats.style";
import { BlockInfo } from "./BlockInfo";
import { CircleBox } from "./CircleBox";

export const OnboardingStats = ( ) => {

  return (
    <StyledOnboardingStats>
      <BlockInfo/>
      <CircleBox/>
    </StyledOnboardingStats>
  );
};