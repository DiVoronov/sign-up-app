import React from "react";
import { Box } from "@mui/material";
import { Description } from "../Description/Description";
import { useSelector, useDispatch } from "react-redux";
import { setIdentificationGoogleObject } from "../../../app/Slices/identificationGoogleObject";

interface IGoogleEmailItemProps {
  title: string
  color: string
  children: React.ReactNode
};

export const GoogleEmailItem = ( { title, children, color }: IGoogleEmailItemProps ) => {

  const dispatch = useDispatch();
  const useSendGoogleInformation = () => {
    dispatch(setIdentificationGoogleObject({
      title, children, color
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",  
        gap: "8px", 
        height: "68px", 
        ["&:hover"]: {border: "1px solid #3674E0", cursor: "pointer"}
      }}
      onClick={useSendGoogleInformation}
    >
      <Box sx={{mr: 1, display: "flex", flexWrap: "wrap", alignContent: "center"}}>
        <Box sx={{width: "40px", height: "40px", borderRadius: "50%", background: color}}></Box>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", gap: "8px", flexWrap: "wrap", justifyContent: "center"}}>
        <Description color="#24272D" width="100%" size="16px" font="Product Sans">{ title }</Description>
        <Description color="#737B8C" width="100%" size="13px" font="Product Sans">{ children }</Description>
      </Box>
    </Box>
  );
};