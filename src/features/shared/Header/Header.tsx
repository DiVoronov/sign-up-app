import React from "react";
import { Box } from "@mui/material";
import { StyledHeader } from "./Header.style";

interface IHeaderProps {
  title: string
};

export const Header = ( { title }: IHeaderProps ) => {

  return (
    <StyledHeader>
      { title }
    </StyledHeader>
  );
};


