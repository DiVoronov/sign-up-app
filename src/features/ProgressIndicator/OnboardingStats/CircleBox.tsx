import React from "react";
import { Box } from "@mui/material";

import { ReactComponent as CircleActive } from "./CircleActive.svg";
import { ReactComponent as CircleInActive } from "./CircleInActive.svg";

export const CircleBox = ( ) => {

  return (
    <Box id="CircleBox">
      <CircleActive/>
      <CircleInActive/>
      <CircleInActive/>
      <CircleInActive/>
      <CircleInActive/>
    </Box>
  );
};