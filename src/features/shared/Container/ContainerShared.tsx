import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface IContainerSharedProps {
  children: ReactNode
};

export const ContainerShared = ( { children }: IContainerSharedProps ) => {

  return (
    <Box component="div">
      { children }
    </Box>
  );
};