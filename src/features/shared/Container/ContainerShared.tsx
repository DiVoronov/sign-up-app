import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { StyledSharedContainer } from "./ContainerShared.style";

interface IContainerSharedProps {
  children: ReactNode
};

export const ContainerShared = ( { children }: IContainerSharedProps ) => {

  return (
    <StyledSharedContainer>
      { children }
    </StyledSharedContainer>
  );
};