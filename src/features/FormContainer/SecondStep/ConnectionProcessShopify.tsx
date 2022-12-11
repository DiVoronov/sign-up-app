import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Header } from "../../shared/Header/Header";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../../shared/ChadLogoHeader/ChadLogoHeader";
import { BenefitsBlock } from "./BenefitsBlock";
import { MainButton } from "../../shared/MainButton/MainButton";
import { RootState } from "../../../app/store";

import { useSelector, useDispatch } from "react-redux";
import { useGetShopifyQuery } from "../../../app/api/signUp.api";
import { IResponseShopifySuccess, IResponseShopifyFailure } from '../../../app/api/signUp.types';
import { setName } from "../../../app/Slices/welcomeCreateAccountSlice";
import { setConnectShopify } from "../../../app/Slices/connectShopifySlice";

export const ConnectionProcessShopify = () => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);

  const [dataShopifyMain, setDataShopifyMain] = useState< IResponseShopifySuccess | IResponseShopifyFailure | undefined >(undefined)
  const [isRequest, setIsRequest] = useState(false);

  const dispatch = useDispatch();
  const useHandleConnectShopify = async () => {
    setIsRequest(true);
  };

  const { data: dataShopify, isLoading, error } = useGetShopifyQuery(statusWelcomeCreateAccount.name!);

  useEffect( () => {
    isRequest && dispatch(setConnectShopify(true));
  }, [isRequest]);

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <Box id="spacer" sx={{height: "24px", order: "2"}}></Box>
      <Header title="Connect your Shopify store"/>
      <Box id="spacer" sx={{height: "16px", order: "4"}}></Box>
      <Description color="#9196A1" width="100%">This installs the Chad widget in your Shopify store and sets it up to display information that is relevant to your customers.</Description>
      <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
      
      <BenefitsBlock/>
      <Box sx={{mt: 4, order: "7"}} onClick={useHandleConnectShopify}>
        <MainButton title="Connect store"/>
      </Box>
      
      <Box component="a" sx={{order: "10", mt: 2, cursor: "pointer"}}>
        <Description color="#9196A1" width="100%" size="12px">I don’t use Shopify</Description>
      </Box>
    </ContainerShared>
  );
};