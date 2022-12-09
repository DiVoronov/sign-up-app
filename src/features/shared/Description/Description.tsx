import React from "react";
import { Box } from "@mui/material";
import { StyledDescription } from "./Description.style";

interface IDescriptionProps {
  color: string
  width: string
  children: React.ReactNode
  size?: string
};

export const Description = ( { color, width, children, size }: IDescriptionProps ) => {

  const currentSize = () => size ? size : "14px";

  const theme = {
    color: color,
    width: width,
    size: currentSize,
  }

  return (
    <StyledDescription theme={theme}>
      { children }
    </StyledDescription>
  );
};