import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";
import { ReactComponent as VectorTriangle } from "./VectorTriangle.svg";

export const FooterGoogleSign = () => {

  return (
    <Box 
    sx={{
      mt: 2, pb: 1, pt: 1, 
      display: "flex", 
      justifyContent: "space-between",
      ml: "auto", mr: "auto",
      width: "470px",
    }}
    >
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box><Description size="13px" color="#24272D" width="100%">English (United States)</Description></Box>
        <Box sx={{display: "flex", alignItems: "center", ml: 1.5}}><VectorTriangle/></Box>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-between", gap: "2rem"}}>
        <Description size="13px" color="#24272D" width="max-content">Help</Description>
        <Description size="13px" color="#24272D" width="max-content">Privacy</Description>
        <Description size="13px" color="#24272D" width="max-content">Terms</Description>
      </Box>
    </Box>
  );
};