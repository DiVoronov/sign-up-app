import React, { useState } from "react";
import { Box } from "@mui/material";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { MainButton } from "../../shared/MainButton/MainButton";
import { Article } from "../../shared/Article/Article";

import { ReactComponent as ShopifyAvatar } from "./ShopifyAvatar.svg";
import { ReactComponent as Rectangle } from "./Rectangle.svg";
import { StyledShopifyConnected } from "./ShopifyConnected.style";

import { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { setConnectShopifyStore } from "../../../app/Slices/connectShopifyStoreSlice";
import { setConnectShopify } from "../../../app/Slices/connectShopifySlice";
import { useGetShopifyQuery } from "../../../app/api/signUp.api";
import { setShopTokenPost } from "../../../app/Slices/bodyPostSlice";
import { Alert } from "../../shared/Alert/Alert";

export const ShopifyConnected = () => {

  const [ disconnecting, setDisconnecting ] = useState(false);

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);
  const statusAlert = useSelector( (state: RootState) => state.isAlertActive);

  const nameFromSlice = () => statusWelcomeCreateAccount.name ? statusWelcomeCreateAccount.name : "Unknown Person";

  const { data: dataShopify, error: errorShopify, isLoading: isLoadingShopify } = useGetShopifyQuery(`${nameFromSlice}`);


  const dispatch = useDispatch();
  const handleConnectShopifyStore = () => {
    dispatch(setConnectShopifyStore(true));
    dataShopify 
    ? dispatch(setShopTokenPost(dataShopify.token)) 
    : dispatch(setShopTokenPost("Unknown token"))
  };

  const handleBackToConnectShopify = async () => {
    setDisconnecting(true);
    setTimeout( () => {
      dispatch(setConnectShopify(false));
    }, 2000);
  };

  return (

    disconnecting
    ?
    <ContainerShared>
      <Box sx={{display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
        <Box sx={{display: "flex", justifyContent: "center"}}><Rectangle/></Box>
        <Description width="100%" color="#5F82A0">Disconnecting store...</Description>
      </Box>
    </ContainerShared>
    
    :
    <ContainerShared>
      <StyledShopifyConnected>
        <Box sx={{mb: 1}}><ShopifyAvatar/></Box>
        <Article title="Store connected" size="20px"/>
        <Description color="#5F82A0" width="100%" size="12px">Chad is now able to manage customer support requests for {statusWelcomeCreateAccount.name?.toUpperCase()}.</Description>
        <MainButton title="Continue" callback={handleConnectShopifyStore}/>
        <Box component="span" id="bottom-title">
          <Description width="100%" color="#4F637D">Wrong store?</Description>
          <Box component="span" onClick={handleBackToConnectShopify}><Box component="a">Connect another one</Box></Box>
        </Box>
      </StyledShopifyConnected>
      {
        statusAlert
        &&
        <Alert boldTitle="continue the process" alertType="error">Please </Alert>
      }
    </ContainerShared>
  );
};



