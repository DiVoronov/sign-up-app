import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../shared/Header/Header";
import { Description } from "../../shared/Description/Description";
import { FormFields } from "../FormFields/FormFields";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../../shared/ChadLogoHeader/ChadLogoHeader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { ProgressIndicatorContainerMobile } from "../../ProgressIndicator/ProgressIndicatorContainerMobile";
import { Alert } from "../../shared/Alert/Alert";

export const CreationAccount = () => {

  const statusAlert = useSelector( (state: RootState) => state.isAlertActive);

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <ProgressIndicatorContainerMobile/>
      <Box id="spacer" sx={{height: "24px", order: "2"}}></Box>
      <Header title="Welcome to Chad"/>
      <Box id="spacer" sx={{height: "16px", order: "4"}}></Box>
      <Description color="#4F637D" width="100%">Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</Description>
      <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
      <FormFields/>
      {
        statusAlert
        &&
        <Alert boldTitle="required fields" alertType="error">Please fill in all </Alert>
      }
    </ContainerShared>
  )
};