import React from "react";
import { Box } from "@mui/material";
import { StyledGmailButton } from "./GmailButton.style";

import { ReactComponent as GmailIcon } from "./GmailIcon.svg";

interface IGmailButtonProps {
  callback: () => void
};

export const GmailButton = ( { callback }: IGmailButtonProps ) => {

  return (
    <StyledGmailButton onClick={callback}>
      <Box>
        <GmailIcon/>
      </Box>
      <Box component="span" sx={{width: "max-content"}}>Connect Gmail account</Box>
    </StyledGmailButton>
  );
};