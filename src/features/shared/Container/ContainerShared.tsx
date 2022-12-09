import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { StyledSharedContainer } from "./ContainerShared.style";

interface IContainerSharedProps {
  // height: string
  children: ReactNode
};

export const ContainerShared = ( { children }: IContainerSharedProps ) => {

  // const theme = {
  //   height: height,
  // }

  return (
    <StyledSharedContainer>
      { children }
    </StyledSharedContainer>
  );
};