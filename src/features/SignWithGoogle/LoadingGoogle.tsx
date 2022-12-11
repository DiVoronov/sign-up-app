import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";

import { ReactComponent as Loading } from "./Loading.svg";
import { StyledLoadingGoogle } from "./LoadingGoogle.style";

export const LoadingGoogle = () => {

  return (
    <StyledLoadingGoogle>

      <Box id="load">
        <Loading/>
      </Box>
      <Description color="#2F3237" width="max-content" size="16px">One moment please...</Description>

    </StyledLoadingGoogle>
  )
};