import React from "react";
import { Box } from "@mui/material";
import { StyledDescription } from "./Description.style";

interface IDescriptionProps {
  color: string
  width: string
  children: React.ReactNode
  size?: string
  font?: string
  weight?: string
  accentColor? : string
};

export const Description = ( { color, width, children, size, font, weight, accentColor }: IDescriptionProps ) => {

  const currentSize = () => size ? size : "14px";
  const currentFont = () => font ? font : "Inter";
  const currentWeight = () => weight ? parseInt(weight) : 400;

  const theme = {
    color: color,
    width: width,
    size: currentSize,
    font: currentFont,
    weight: currentWeight,
    accentColor: accentColor,
  };

  return (
    <StyledDescription theme={theme}>
      { children }
    </StyledDescription>
  );
};