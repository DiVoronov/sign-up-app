import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";

import { StyledSignWithGoogle } from "./SignWithGoogle.style";
import { ReactComponent as SocialIcon } from "./SocialIcon.svg";
import { GoogleEmailItem } from "../shared/GoogleEmailItem/GoogleEmailItem";

interface ISignWithGoogleProps {
  title: string
};

const BottomBorderLine = () => {

  return (
    <Box sx={{borderBottom: "1px solid #E3E5E8", width: "90%"}}>
      
    </Box>
  );
};

export const SignWithGoogle = ( { title }: ISignWithGoogleProps ) => {

  return (
    <StyledSignWithGoogle>
      <Box sx={{display: "flex", p: 1.5}}>
        <Box sx={{pr: 2}}><SocialIcon/></Box>
        <Box><Description color="#737B8C" width="100%" size="13px">Sign in with Google</Description></Box>
      </Box>
      <Box id="first-line"></Box>

      <GoogleEmailItem title="Giga Chad" color="#32ABF2">gigachad@gmail.com</GoogleEmailItem>
      <BottomBorderLine/>
      <GoogleEmailItem title="Mini Chad" color="#EB920B">minichad@gmail.com</GoogleEmailItem>
      <BottomBorderLine/>
      <GoogleEmailItem title="Ultra Chad" color="#65BD47">ultrachad@gmail.com</GoogleEmailItem>
      <BottomBorderLine/>


    </StyledSignWithGoogle>
  );
};