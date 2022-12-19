import React from "react";
import { Box } from "@mui/material";
import { ProgressIndicatorContainer } from "../ProgressIndicator/ProgressIndicatorContainer";
import { Surface } from "../Surface/Surface";
import { FormContainer } from "../FormContainer/FormContainer";

export const MainRegistrationProgressComponent = () => {

  return (
    <Box component="div" sx={{width: "100%", minHeight: "100%", background: "#FFFFFF", display: "flex"}}>
      <Surface/>
      <ProgressIndicatorContainer/>
      <FormContainer/>
    </Box>
  );
};