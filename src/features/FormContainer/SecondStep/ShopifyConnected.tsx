import React from "react";
import { Box } from "@mui/material";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { MainButton } from "../../shared/MainButton/MainButton";
import { Article } from "../../shared/Article/Article";

import { ReactComponent as ShopifyAvatar } from "./ShopifyAvatar.svg";
import { StyledShopifyConnected } from "./ShopifyConnected.style";

import { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { setConnectShopifyStore } from "../../../app/Slices/connectShopifyStoreSlice";

export const ShopifyConnected = () => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);

  const dispatch = useDispatch();
  const handleConnectShopifyStore = () => {
    dispatch(setConnectShopifyStore(true));
  };

  return (
    <ContainerShared>
      <StyledShopifyConnected>
        <Box sx={{mb: 1}}><ShopifyAvatar/></Box>
        <Article title="Store connected" size="20px"/>
        <Description color="#5F82A0" width="100%" size="12px">Chad is now able to manage customer support requests for {statusWelcomeCreateAccount.name?.toUpperCase()}.</Description>
        <MainButton title="Continue" callback={handleConnectShopifyStore}/>
        <Box component="span" id="bottom-title">
          <Description width="100%" color="#4F637D">Wrong store?</Description>
          <Box component="span"><Box component="a">Connect another one</Box></Box>
        </Box>
      </StyledShopifyConnected>
    </ContainerShared>
  );
};



