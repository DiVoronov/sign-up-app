import React from "react";
import { Box } from "@mui/material";
import { Benefit } from "../../shared/Benefit/Benefit";

export const BenefitsBlock = () => {

  return (
    <Box sx={{order: "6"}}>
      <Benefit title="Track orders and shipping">Allow your customers to track order and shipping status on Shopify</Benefit> 
      <Benefit title="Check inventory">Automatically check Shopify inventory when your customers ask for replacements</Benefit> 
      <Benefit title="Process payments">Process refunds according to your Store Policy</Benefit> 
    </Box>
  );
};