import React from "react";
import { Box } from "@mui/material";

import { ReactComponent as SurfaceSVG } from "./Surface.svg";
import SurfacePNG from "./surface.png";
import { StyledSurface } from "./Surface.style";

export const Surface = ( ) => {

  const theme = {
    url: "./surface.png"
  }

  return (
    <StyledSurface id="surface" theme={theme}>
      {/* <div style={{backgroundImage: "url('./surface.png')"}}></div>
      <img src="./surface.png"/> */}
      {/* <SurfaceSVG/> */}
    </StyledSurface>
  );
};