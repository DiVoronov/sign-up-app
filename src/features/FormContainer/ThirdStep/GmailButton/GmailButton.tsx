import React from "react";
import { Box } from "@mui/material";
import { StyledGmailButton } from "./GmailButton.style";

import { ReactComponent as GmailIcon } from "./GmailIcon.svg";

export const GmailButton = () => {

  return (
    <StyledGmailButton>
      <Box>
        <GmailIcon/>
      </Box>
      <Box component="span">Connect Gmail account</Box>
    </StyledGmailButton>
  );
};