import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";

import { StyledSignWithGoogle } from "./SignWithGoogle.style";
import { ReactComponent as SocialIcon } from "./SocialIcon.svg";
import { GoogleEmailItem } from "../shared/GoogleEmailItem/GoogleEmailItem";

interface ISignWithGoogleProps {
  title: string
  children: React.ReactNode
};

export const SignWithGoogle = ( { title, children }: ISignWithGoogleProps ) => {

  return (
    <StyledSignWithGoogle>
      <Box sx={{display: "flex", p: 1.5}}>
        <Box sx={{pr: 2}}><SocialIcon/></Box>
        <Box><Description color="#737B8C" width="100%" size="13px" font="Product Sans">Sign in with Google</Description></Box>
      </Box>
      <Box id="first-line"></Box>

      <Box sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
        { children }
      </Box>
      
    </StyledSignWithGoogle>
  );
};