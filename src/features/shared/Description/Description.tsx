import React from "react";
import { Box } from "@mui/material";
import { StyledDescription } from "./Description.style";

interface IDescriptionProps {
  color: string
  width: string
  children: React.ReactNode
};

export const Description = ( { color, width, children }: IDescriptionProps ) => {

  const theme = {
    color: color,
    width: width,
  }

  return (
    <StyledDescription theme={theme}>
      { children }
    </StyledDescription>
  );
};