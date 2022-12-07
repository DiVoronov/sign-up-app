import React from "react";
import { Box } from "@mui/material";

import { ReactComponent as SurfaceSVG } from "./Surface.svg";
import { StyledSurface } from "./Surface.style";

export const Surface = ( ) => {

  return (
    <StyledSurface id="surface">
      <SurfaceSVG/>
    </StyledSurface>
  );
};