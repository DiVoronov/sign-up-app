import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Header } from "../../shared/Header/Header";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../../shared/ChadLogoHeader/ChadLogoHeader";
import { BenefitsBlockEmail } from "./BenefitsBlockEmail";
import { GmailButton } from "./GmailButton/GmailButton";
import { useSelector, useDispatch } from "react-redux";
import { useGetGoogleQuery } from "../../../app/api/signUp.api";
import { setConnectEmail } from "../../../app/Slices/connectEmailSlice";

export const ConnectionProcessEmail = () => {

  const [isRequest, setIsRequest] = useState(false);

  const dispatch = useDispatch();
  const useHandleConnectGoogle = () => {
    setIsRequest(true);
  };

  const { data: dataGoogle, isLoading, error } = useGetGoogleQuery();

  useEffect( () => {
    (isRequest && dataGoogle) && dispatch(setConnectEmail(true));
  }, [isRequest]);

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <Box id="spacer" sx={{height: "24px", order: "2", display: "flex"}}></Box>
      <Header title="Connect your customer support email"/>
      <Box id="spacer" sx={{height: "8px", order: "4"}}></Box>
      <Description color="#9196A1" width="100%">Allows Chad to send automated responses on your behalf from your usual support mailbox</Description>
      <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
      
      <BenefitsBlockEmail/>
      
      <GmailButton callback={useHandleConnectGoogle}/>
      
      <Box component="a" sx={{order: "10", mt: 2, cursor: "pointer"}}>
        <Description color="#9196A1" width="100%" size="12px">I don’t use Gmail</Description>
      </Box>
    </ContainerShared>
  );
};