import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Description } from "../Description/Description";
import { ContainerShared } from "../Container/ContainerShared";
import { MainButton } from "../MainButton/MainButton";
import { Article } from "../Article/Article";
import { ChadLogoHeader } from "../ChadLogoHeader/ChadLogoHeader";
import { Header } from "../Header/Header";
import { StyledBottomTitle } from "./BottomTitle.style";
import { SelectBlock } from "./SelectBlock/SelectBlock";

export interface IOptionsArray {
  id: number
  value: string
};

export interface ISelectBlockProps {
  optionsArray: IOptionsArray[]
};

interface IDoNotUseProps {
  title: string
  description: string
  optionsArray: IOptionsArray[]
};

// const optionsArrayShopify = [
//   { id: 1, value: "Salesforce" },
//   { id: 2, value: "Ecwid" },
//   { id: 3, value: "Other" },
// ];

export const DoNotUse = ( { title, description, optionsArray }: IDoNotUseProps ) => {

  return (
    <ContainerShared>
      <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", width: "100%"}}>
        <ChadLogoHeader/>
        <Header title={`Don’t use ${title}?`}/>
        <Description color="#5F82A0" width="100%" size="12px">{ description }</Description>

        <Box sx={{display: "flex", order: "5"}}>
          <SelectBlock optionsArray={optionsArray}/>
        </Box>
        

        <MainButton title="Submit"/>
        <StyledBottomTitle>
          <Description width="100%" color="#4F637D">{`Actually use ${title}?`}</Description>
          <Box component="span"><Box component="a">Connect</Box></Box>
        </StyledBottomTitle>
      </Box>
    </ContainerShared>
  );
};