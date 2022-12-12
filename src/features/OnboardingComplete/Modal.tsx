import React from "react";
import { Box } from "@mui/material";
import { Description } from "../shared/Description/Description";
import { ContainerShared } from "../shared/Container/ContainerShared";
import { MainButton } from "../shared/MainButton/MainButton";

import { ReactComponent as IconX } from "./svg/IconX.svg";
import { ReactComponent as HeaderReady } from "./svg/HeaderReady.svg";

interface IModalProps {
  title: string
}

export const Modal = ( { title }: IModalProps ) => {
  return (
    <Box sx={{
      position: "fixed", 
      top: "20%", 
      left: "30%",
      margin: "auto",
      zIndex: 1001,
    }}>
      <ContainerShared>
        <Box 
          sx={{
            position: "absolute",
            right: "8%",
            top: "5%",
            cursor: "pointer",
          }}
        >
          <IconX/>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start"}}>
          <Box sx={{mb: 1}}><HeaderReady/></Box>
          <Description color="#20496C" width="100%" size="16px">A fully loaded self-service portal is now ready to deploy on your Shopify store.</Description>
          <Description color="#20496C" width="100%" size="16px">We’ve programmed it to follow industry best practices for shipping, return & exchange, and payment policy.</Description>
          <Description color="#20496C" width="100%" size="16px">You can customize these settings to fit your store policy anytime.</Description>
          <Description color="#20496C" width="100%" size="16px">Lastly, {<strong> nothing is live until you hit “Go Live”! </strong>} </Description>
          <MainButton title="Start customizing"/>
        </Box>
      </ContainerShared>
    </Box>
  )
};