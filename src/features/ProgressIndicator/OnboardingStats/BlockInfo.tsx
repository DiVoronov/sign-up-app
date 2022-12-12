import React from "react";
import { Box } from "@mui/material";
import { Description } from "../../shared/Description/Description";

export const BlockInfo = ( ) => {

  return (
    <Box id="OnboardingStats-info">
      <h1>5X</h1>
      <Description color="#96CAF7" width="80%">Acquiring a new customer is 5x more costly than making an unhappy customer happy</Description>
    </Box>
  );
};