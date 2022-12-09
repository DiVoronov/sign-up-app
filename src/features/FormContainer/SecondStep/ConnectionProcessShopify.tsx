import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../shared/Header/Header";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../../shared/ChadLogoHeader/ChadLogoHeader";
import { BenefitsBlock } from "./BenefitsBlock";
import { MainButton } from "../../shared/MainButton/MainButton";

export const ConnectionProcessShopify = () => {

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <Box id="spacer" sx={{height: "24px", order: "2"}}></Box>
      <Header title="Connect your Shopify store"/>
      <Box id="spacer" sx={{height: "16px", order: "4"}}></Box>
      <Description color="#9196A1" width="100%">This installs the Chad widget in your Shopify store and sets it up to display information that is relevant to your customers.</Description>
      <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
      
      <BenefitsBlock/>
      <Box sx={{mt: 4, order: "7"}}>
        <MainButton title="Connect store"/>
      </Box>
      
      <Box component="a" sx={{order: "10", mt: 2, cursor: "pointer"}}>
        <Description color="#9196A1" width="100%" size="12px">I don’t use Shopify</Description>
      </Box>
    </ContainerShared>
  );
};