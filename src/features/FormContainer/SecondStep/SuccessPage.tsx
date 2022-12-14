import React from "react";
import { Box } from "@mui/material";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { MainButton } from "../../shared/MainButton/MainButton";
import { Article } from "../../shared/Article/Article";

import { ReactComponent as Success } from "./Success.svg";
import { StyledSuccessReady } from "./SuccessPage.style";
import { StyledOnboardingComplete, StyledSharedContainerReady } from "../../OnboardingComplete/OnboardingComplete.style";

interface ITitleSuccessProps {
  title: string
};

export const SuccessPage = ( { title }: ITitleSuccessProps ) => {

  return (
    <StyledSuccessReady>
      <Box sx={{display: "flex"}}>
        <Box id="success-box-inner">
          <Box sx={{display: "flex", flexDirection: "column", gap: "8px", textAlign: "center", justifyContent: "center"}}>
            <Box sx={{mb: 1}}><Success/></Box>
            <Article title="Response received" size="20px"/>
            <Description color="#5F82A0" width="100%" size="12px">Thank you for your interest in Chad! We’ll be hard at work building integrations to support your {title}.</Description>
            <MainButton title="Done"/>
          </Box>
        </Box>
      </Box>
    </StyledSuccessReady>
  );
};



