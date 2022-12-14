import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../../shared/ChadLogoHeader/ChadLogoHeader";
import { BenefitsBlockEmail } from "./BenefitsBlockEmail";
import { GmailButton } from "./GmailButton/GmailButton";
import { useSelector, useDispatch } from "react-redux";
import { useGetGoogleQuery } from "../../../app/api/signUp.api";
import { setConnectEmail } from "../../../app/Slices/connectEmailSlice";
import { setDoNotUseGoogle } from "../../../app/Slices/doNotUseGoogleSlice";
import { setIdentificationGoogle } from "../../../app/Slices/identificationGoogle";
import { ProgressIndicatorContainerMobile } from "../../ProgressIndicator/ProgressIndicatorContainerMobile";
import { Alert } from "../../shared/Alert/Alert";
import { RootState } from "../../../app/store";

export const ConnectionProcessEmail = () => {

  const statusAlert = useSelector( (state: RootState) => state.isAlertActive);

  const [isRequest, setIsRequest] = useState(false);

  const dispatch = useDispatch();
  const useHandleConnectGoogle = () => {
    dispatch(setIdentificationGoogle(true));
  };

  const { data: dataGoogle, isLoading, error } = useGetGoogleQuery();

  useEffect( () => {
    (isRequest && dataGoogle) && dispatch(setConnectEmail(true));
  }, [isRequest]);

  const handleDoNotUseGoogle = () => {
    dispatch(setDoNotUseGoogle(true));
  };

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <ProgressIndicatorContainerMobile/>
      <Box id="spacer" sx={{height: "24px", order: "2", display: "flex"}}></Box>
      <Description color="#134267" width="100%" size="24px" weight="600">Connect your customer support email</Description>
      <Box id="spacer" sx={{height: "16px", order: "4"}}></Box>
      <Description color="#9196A1" width="100%">Allows Chad to send automated responses on your behalf from your usual support mailbox</Description>
      <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
      
      <BenefitsBlockEmail/>
      
      <GmailButton callback={useHandleConnectGoogle}/>
      
      <Box component="a" sx={{order: "10", mt: 2, cursor: "pointer"}} onClick={handleDoNotUseGoogle}>
        <Description color="#9196A1" width="100%" size="12px">I don???t use Gmail</Description>
      </Box>
      {
        statusAlert
        &&
        <Alert boldTitle="connect Google account" alertType="error">Please </Alert>
      }
    </ContainerShared>
  );
};