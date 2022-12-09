import React from "react";
import { Box } from "@mui/material";
import { Description } from "../Description/Description";

interface IGoogleEmailItemProps {
  title: string
  color: string
  children: React.ReactNode
};

export const GoogleEmailItem = ( { title, children, color }: IGoogleEmailItemProps ) => {

  return (
    <Box sx={{display: "flex", mb: 1.5, gap: "8px"}}>
      <Box sx={{mr: 1}}>
        <Box sx={{width: "40px", height: "40px", borderRadius: "50%", background: color}}></Box>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
        <Description color="#24272D" width="100%" size="16px">{ title }</Description>
        <Description color="#737B8C" width="100%" size="13px">{ children }</Description>
      </Box>
    </Box>
  );
};