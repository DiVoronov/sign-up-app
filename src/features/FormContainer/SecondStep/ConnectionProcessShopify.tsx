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
import { setConnectShopify } from "../../../app/Slices/connectShopifySlice";
import { setDoNotUse } from "../../../app/Slices/doNotUseShopifySlice";
import { ProgressIndicatorContainerMobile } from "../../ProgressIndicator/ProgressIndicatorContainerMobile";

export const ConnectionProcessShopify = () => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);

  const [isRequest, setIsRequest] = useState(false);

  const [ connecting, setConnecting ] = useState(false);

  const dispatch = useDispatch();
  const useHandleConnectShopify = () => {
    handleConnectShopify()
    setTimeout( () => {
      setIsRequest(true);
    }, 1500);
  };

  const { data: dataShopify, isLoading, error } = useGetShopifyQuery(statusWelcomeCreateAccount.name!);

  useEffect( () => {
    isRequest && dispatch(setConnectShopify(true));
  }, [isRequest]);

  const handleDoNotUseShopify = () => {
    dispatch(setDoNotUse(true));
  };

  const handleConnectShopify = () => {
    setConnecting(true);
    setTimeout( () => {
      setConnecting(false);
    }, 2000);
  };

  return (
    <ContainerShared>
      <ChadLogoHeader/>
      <ProgressIndicatorContainerMobile/>
      <Box className="spacer" sx={{height: "24px", order: "2"}}></Box>
      <Header title="Connect your Shopify store"/>
      <Box className="spacer" sx={{height: "16px", order: "4"}}></Box>
      <Description color="#9196A1" width="100%">This installs the Chad widget in your Shopify store and sets it up to display information that is relevant to your customers.</Description>
      <Box className="spacer" sx={{height: "32px", order: "5"}}></Box>
      
      <BenefitsBlock/>
      <Box sx={{mt: 4, order: "7"}} onClick={useHandleConnectShopify}>
        <MainButton title="Connect store"/>
      </Box>
      
      <Box component="a" sx={{order: "10", mt: 2, cursor: "pointer"}} onClick={handleDoNotUseShopify}>
        <Description color="#9196A1" width="100%" size="12px">I don’t use Shopify</Description>
      </Box>
      { 
        connecting 
        &&  
        <Box sx={{position: "fixed", width: {xs: "450px", sm: "1440px"}, height: "900px", background: "#FFFFFF", left: "0px", top: "0px"}}>
          <Box sx={{position: "absolute", width: {xs: "450px", sm: "1440px"}, height: "900px", left: {xs: "100px", sm: "631px"}, top: {xs: "200px", sm: "268px"}}}>
            <Description color="#9196A1" width="100%" size="16px">Connecting to Shopify...</Description>
          </Box>
        </Box>
      }
    </ContainerShared>
  );
};