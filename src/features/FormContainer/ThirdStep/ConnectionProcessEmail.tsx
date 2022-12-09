import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../shared/Header/Header";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../../shared/ChadLogoHeader/ChadLogoHeader";
import { BenefitsBlockEmail } from "./BenefitsBlockEmail";
import { MainButton } from "../../shared/MainButton/MainButton";
import { GmailButton } from "./GmailButton/GmailButton";

export const ConnectionProcessEmail = () => {

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <Box id="spacer" sx={{height: "24px", order: "2", display: "flex"}}></Box>
      <Header title="Connect your customer support email"/>
      <Box id="spacer" sx={{height: "8px", order: "4"}}></Box>
      <Description color="#9196A1" width="100%">Allows Chad to send automated responses on your behalf from your usual support mailbox</Description>
      <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
      
      <BenefitsBlockEmail/>
      
      <GmailButton/>
      
      <Box component="a" sx={{order: "10", mt: 2, cursor: "pointer"}}>
        <Description color="#9196A1" width="100%" size="12px">I don’t use Gmail</Description>
      </Box>
    </ContainerShared>
  );
};