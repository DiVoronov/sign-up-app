import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";

import { GoogleEmailItem } from "../shared/GoogleEmailItem/GoogleEmailItem";

import { ReactComponent as UserCircle } from "./UserCircle.svg";


interface ISignWithGoogleProps {
  title: string
};

const BottomBorderLine = () => {

  return (
    <Box sx={{borderBottom: "1px solid #E3E5E8", width: "90%"}}>
      
    </Box>
  );
};

export const ConnectGoogleFirst = ( { title }: ISignWithGoogleProps ) => {

  return (
    <Box sx={{width: "90%"}}>

      <Box sx={{display: "flex", flexDirection: "column-reverse", gap: "8px", flexWrap: "wrap", justifyContent: "center", margin: "5rem auto 2rem auto", alignContent: "center"}}>
        <Description color="#24272D" width="max-content" size="24px" font="Product Sans" weight="500">Choose an account</Description>
        <Box sx={{display: "flex", gap: "6px", justifyContent: "center"}}>
          <Description color="#24272D" width="max-content" size="16px" font="Product Sans" weight="500">to continue to </Description>
          <Description color="#3674E0" width="max-content" size="16px" font="Product Sans" weight="500"><a>Chad</a></Description>
        </Box>
      </Box>

      <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", 
          alignContent: "center",
          ml: 4
        }}
      >
        <GoogleEmailItem title="Giga Chad" color="#32ABF2">gigachad@gmail.com</GoogleEmailItem>
        <BottomBorderLine/>
        <GoogleEmailItem title="Mini Chad" color="#EB920B">minichad@gmail.com</GoogleEmailItem>
        <BottomBorderLine/>
        <GoogleEmailItem title="Ultra Chad" color="#65BD47">ultrachad@gmail.com</GoogleEmailItem>
        <BottomBorderLine/>

        <Box sx={{display: "flex",  gap: "8px", height: "49px", ml: 1}}>
          <Box sx={{mr: 1, display: "flex", flexWrap: "wrap", alignContent: "center"}}>
            <UserCircle/>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", gap: "8px", flexWrap: "wrap", justifyContent: "center", ml: 1}}>
            <Description color="#24272D" width="100%" size="16px" font="Product Sans">Use another account</Description>
          </Box>
        </Box>
        <BottomBorderLine/>
      </Box>

      <Box sx={{display: "flex", flexDirection: "column-reverse", flexWrap: "wrap", justifyContent: "center", margin: "2rem auto 2rem auto", alignContent: "center"}}>
        <Description color="#24272D" width="95%" size="13px" weight="500">
          To continue, Google will share your name, email address,
          language preference, and profile picture with Chad.
          Before using this app, you can review Chad's
        </Description>
        <Box sx={{display: "flex", gap: "6px"}}>
          <Description color="#3674E0" width="max-content" size="13px" weight="500">
            <a>privacy policy</a>
          </Description>
          <Description color="#24272D" width="max-content" size="13px" weight="500">
            and
          </Description>
          <Description color="#3674E0" width="max-content" size="13px" weight="500">
            <a>terms of service.</a>
          </Description>
        </Box>

      </Box>
    </Box>
  );
};