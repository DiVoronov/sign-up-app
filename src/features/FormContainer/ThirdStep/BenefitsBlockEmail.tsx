import React from "react";
import { Box } from "@mui/material";
import { Benefit } from "../../shared/Benefit/Benefit";

export const BenefitsBlockEmail = () => {

  return (
    <Box sx={{order: "6"}}>
      <Benefit title="Contextual responses">Custom responses to any support situation from “where’s my stuff?” to “I want a refund”</Benefit> 
      <Benefit title="Reply from anywhere">Respond to your customers via email or Chad chat—it’s all saved in the same thread</Benefit> 
      <Benefit title="Categorical inbox tags">Tags your emails by category so you know what to expect before even opening an email</Benefit> 
    </Box>
  );
};