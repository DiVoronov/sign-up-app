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
      width: {xs: "350px", sm: "470px"},
    }}
    >
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box><Description size="13px" color="#24272D" width="100%" font="Product Sans"><a>English (United States)</a></Description></Box>
        <Box sx={{display: "flex", alignItems: "center", ml: 1.5}}><VectorTriangle/></Box>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-between", gap: "2rem"}}>
        <Description size="13px" color="#24272D" width="max-content" font="Product Sans"><a>Help</a></Description>
        <Description size="13px" color="#24272D" width="max-content" font="Product Sans"><a>Privacy</a></Description>
        <Description size="13px" color="#24272D" width="max-content" font="Product Sans"><a>Terms</a></Description>
      </Box>
    </Box>
  );
};