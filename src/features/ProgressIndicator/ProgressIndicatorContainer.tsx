import React from "react";
import { Box } from "@mui/material";
import { StyledProgressIndicatorContainer } from "./ProgressIndicatorContainer.style";
import { Header } from "../shared/Header/Header";
import { StepCircle } from "../shared/StepCircle/StepSircle";
import { Line } from "../shared/StepCircle/Line";
import { ArticleStep } from "../shared/ArticleStep/ArticleStep";
import { PrevNextButtons } from "../shared/PrevNextButtons/PrevNextButtons";

export const ProgressIndicatorContainer = () => {

  return (
    <StyledProgressIndicatorContainer>
      <Box id="steps-and-buttons">
        <Box sx={{display: "flex"}}>
          <Box sx={{
            display: "flex", flexDirection: "column", alignItems: "center",
            ["& > div"]: { display: "flex" }
          }}>
            <StepCircle status="inactive"/>
            <Line status="inactive"/>
            <StepCircle status="activeFirst"/>
            <Line status="active"/>
            <StepCircle status="activeSecondTick"/>
            <Line status="inactive"/>
            <StepCircle status="activeThird"/>
            {/* <Line status="active"/>
            <StepCircle status="inactiveTick"/> */}
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", ml: 2, padding: "5px"}}>
            <ArticleStep condition="active" title="Welcome"/>
            <ArticleStep condition="active" title="Connect your Shopify store"/>
            <ArticleStep condition="inactive" title="Connect your customer support email"/>
            <ArticleStep condition="inactive" title="Done"/>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mt: 5}}>
          <PrevNextButtons title="Back" condition="active"/>
          <PrevNextButtons title="Next" condition="inactive"/>
        </Box>
      </Box>
    </StyledProgressIndicatorContainer>
  )
};