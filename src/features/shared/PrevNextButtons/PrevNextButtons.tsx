import React from "react";
import { Box } from "@mui/material";
import Prev from "./Prev.svg";
import Next from "./Next.svg";
import { StyledPrevNextButtons } from "./PrevNextButtons.style";

interface IPrevNextButtonsProps {
  title: string
  condition: string
  isMobile?: boolean
};

export const PrevNextButtons = ( { title, condition, isMobile }: IPrevNextButtonsProps ) => {

  const background = () => (condition === "active" && !isMobile) ? "#134267" : "none";
  const colorText = () => (!isMobile) ? "#93A8C1" : (isMobile && (condition === "active")) ? "#4F637D" : "#C3CAD5";
  const size = () => isMobile ? "12px" : "16px";

  const theme = {
    background: background,
    color: colorText,
    size: size,
  };

  return (
    <StyledPrevNextButtons theme={theme}>
      { title === "Back" && <img src={Prev}/> }
        { title }
      { title === "Next" && <img src={Next}/> }
    </StyledPrevNextButtons>
  );
};