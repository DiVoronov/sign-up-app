import React from "react";
import { Box } from "@mui/material";
import { StyledMainButton } from "./MainButton.style";

interface IMainButtonProps {
  title: string
};

export const MainButton = ( { title }: IMainButtonProps ) => {

  return (
    <StyledMainButton>
      { title }
    </StyledMainButton>
  );
};