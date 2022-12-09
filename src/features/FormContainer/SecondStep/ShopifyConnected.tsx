import React from "react";
import { Box } from "@mui/material";
import { Description } from "../../shared/Description/Description";
import { ContainerShared } from "../../shared/Container/ContainerShared";
import { MainButton } from "../../shared/MainButton/MainButton";
import { Article } from "../../shared/Article/Article";

import { ReactComponent as ShopifyAvatar } from "./ShopifyAvatar.svg";
import { StyledShopifyConnected } from "./ShopifyConnected.style";

export const ShopifyConnected = () => {

  return (
    <ContainerShared>
      <StyledShopifyConnected>
        <Box sx={{mb: 1}}><ShopifyAvatar/></Box>
        <Article title="Store connected" size="20px"/>
        <Description color="#5F82A0" width="100%" size="12px">Chad is now able to manage customer support requests for {`${"STORE-NAME"}`}.</Description>
        <MainButton title="Continue"/>
        <Box component="span" id="bottom-title">
          <Description width="100%" color="#4F637D">Wrong store?</Description>
          <Box component="span"><Box component="a">Connect another one</Box></Box>
        </Box>
      </StyledShopifyConnected>
    </ContainerShared>
  );
};



