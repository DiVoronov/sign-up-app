import React from "react";
import { Box } from "@mui/material";
import { Description } from "../Description/Description";
import { Article } from "../Article/Article";

import { ReactComponent as TickGreen } from "./TickGreen.svg";

interface IBenefitProps {
  title: string
  children: React.ReactNode
};

export const Benefit = ( { title, children }: IBenefitProps ) => {

  return (
    <Box sx={{display: "flex", mb: 1.5, gap: "8px"}}>
      <Box sx={{mr: 1}}>
        <TickGreen/>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
        <Article title={title} size="14px"/>
        <Description color="#9196A1" width="100%" size="12px">{ children }</Description>
      </Box>
    </Box>
  );
};