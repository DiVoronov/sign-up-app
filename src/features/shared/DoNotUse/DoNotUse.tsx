import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Description } from "../Description/Description";
import { ContainerShared } from "../Container/ContainerShared";
import { MainButton } from "../MainButton/MainButton";
import { ChadLogoHeader } from "../ChadLogoHeader/ChadLogoHeader";
import { Header } from "../Header/Header";
import { StyledBottomTitle } from "./BottomTitle.style";
import { SelectBlock } from "./SelectBlock/SelectBlock";
import { setDoNotUse } from "../../../app/Slices/doNotUseShopifySlice";

import { useSelector, useDispatch } from "react-redux";
import { setDoNotUseGoogle } from "../../../app/Slices/doNotUseGoogleSlice";
import { SuccessPage } from "../../FormContainer/SecondStep/SuccessPage"

export interface IOptionsArray {
  id: number
  value: string
};

export interface ISelectBlockProps {
  optionsArray: IOptionsArray[]
  callback?: () => void
};

interface IDoNotUseProps {
  title: string
  description: string
  optionsArray: IOptionsArray[]
};

export const DoNotUse = ( { title, description, optionsArray }: IDoNotUseProps ) => {

  const [ other, setOther ] = useState(false);

  const dispatch = useDispatch();

  const handleBackToConnect = () => {
    title === "Shopify" && dispatch(setDoNotUse(false));
    title === "Google" && dispatch(setDoNotUseGoogle(false));
  };

  const endTitleOfSuccess = () => {
    if ( title === "Shopify" ) {
      return " platform";
    } else {
      return " email client"
    };
  };
  const endTitleOfSuccessString = endTitleOfSuccess();
  const handleSendInformation = () => {
    setOther(true);
  };

  return (

    other
    ?
    <SuccessPage title={endTitleOfSuccessString}/>
    :
    <ContainerShared>
      <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", width: "100%"}}>
        <ChadLogoHeader/>
        <Header title={`Don’t use ${title}?`}/>
        <Description color="#5F82A0" width="100%" size="12px">{ description }</Description>

        <Box sx={{display: "flex", order: "5"}}>
          <SelectBlock optionsArray={optionsArray}/>
        </Box>
        

        <MainButton title="Submit" callback={handleSendInformation}/>
        <StyledBottomTitle>
          <Description width="100%" color="#4F637D">{`Actually use ${title}?`}</Description>
          <Box component="span" onClick={handleBackToConnect}><Box component="a">Connect</Box></Box>
        </StyledBottomTitle>
      </Box>
    </ContainerShared>
  );
};