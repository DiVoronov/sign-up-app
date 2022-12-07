import React from "react";
import { Box } from "@mui/material";
import { StyledFormContainer } from "./FormContainer.style";
import { Header } from "../shared/Header/Header";
import { Description } from "../shared/Description/Description";

import { ReactComponent as ChadLogo } from "./ChadLogo.svg";
import { FormFields } from "./FormFields/FormFields";

export const FormContainer = ( ) => {

  return (
    <StyledFormContainer>
      <Box id="card">
        <Box id="chad-logo">
          <ChadLogo/>
          <Header title="Chad"/>
        </Box>
        <Box id="spacer" sx={{height: "24px", order: "2"}}></Box>
        <Header title="Welcome to Chad"/>
        <Box id="spacer" sx={{height: "16px", order: "4"}}></Box>
        <Description color="#4F637D" width="100%">Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</Description>
        <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
        <FormFields/>
      </Box>
    </StyledFormContainer>
  );
};