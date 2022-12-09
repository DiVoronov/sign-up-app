import React from "react";
import { Box } from "@mui/material";
import { StyledProgressIndicatorContainer } from "./ProgressIndicatorContainer.style";
import { Header } from "../shared/Header/Header";
import { StepCircle } from "../shared/StepCircle/StepCircle";
import { Line } from "../shared/StepCircle/Line";
import { ArticleStep } from "../shared/ArticleStep/ArticleStep";
import { PrevNextButtons } from "../shared/PrevNextButtons/PrevNextButtons";
import { OnboardingStats } from "./OnboardingStats/OnboardingStats";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";

export const ProgressIndicatorContainer = () => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);
  const statusIsCreateAccount = useSelector( (state: RootState) => state.isCreateAccountDone);
  const statusConnectShopify = useSelector( (state: RootState) => state.connectShopify);
  const statusConnectEmail = useSelector( (state: RootState) => state.connectEmail);
  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);

  const isAccountCreate = () => {
    if (
      statusWelcomeCreateAccount.name &&
      statusWelcomeCreateAccount.email &&
      statusWelcomeCreateAccount.password
    ) {
      return "activeSecondTick";
    } else if (
      statusWelcomeCreateAccount.name ||
      statusWelcomeCreateAccount.email ||
      statusWelcomeCreateAccount.password
    ) {
      return "inactiveTick";
    } else {
      return "activeFirst";
    }
  };
  const isAccountCreateString = isAccountCreate();

    const isCurrentStageDone = ( previousLineStatus: string, currentStageStatus: boolean ) => 
    (previousLineStatus === "active" && !currentStageStatus)
      ? "activeFirst" 
      : (previousLineStatus === "active" && currentStageStatus)
      ? "activeSecondTick"
      : "inactive";

  const statusFirstLine = () => statusIsCreateAccount ? "active" : "inactive";
  const statusFirstLineString = statusFirstLine();

  const isConnectShopifyString = isCurrentStageDone(statusFirstLineString, statusConnectShopify);

  const statusSecondLine = () => isConnectShopifyString === "activeSecondTick" ? "active" : "inactive";
  const statusSecondLineString = statusSecondLine();

  const isConnectEmailString = isCurrentStageDone(statusSecondLineString, statusConnectEmail);

  const statusThirdLine = () => isConnectEmailString === "activeSecondTick" ? "active" : "inactive";
  const statusThirdLineString = statusThirdLine();

  const isRegistrationDoneString = isCurrentStageDone(statusThirdLineString, statusIsRegistrationDone);

  return (
    <StyledProgressIndicatorContainer>
      <Box id="steps-and-buttons">
        <Box sx={{display: "flex"}}>
          <Box sx={{
            display: "flex", flexDirection: "column", alignItems: "center",
            ["& > div"]: { display: "flex" }
          }}>
            <StepCircle status={isAccountCreateString}/>
            <Line status={statusFirstLineString}/>

            <StepCircle status={isConnectShopifyString}/>
            <Line status={statusSecondLineString}/>

            <StepCircle status={isConnectEmailString}/>
            <Line status={statusThirdLineString}/>

            <StepCircle status={isRegistrationDoneString}/>

          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", ml: 2, padding: "5px"}}>
            <ArticleStep condition={isAccountCreateString} title="Welcome"/>
            <ArticleStep condition={isConnectShopifyString} title="Connect your Shopify store"/>
            <ArticleStep condition={isConnectEmailString} title="Connect your customer support email"/>
            <ArticleStep condition={isRegistrationDoneString} title="Done"/>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", mt: 5}}>
          <PrevNextButtons title="Back" condition="active"/>
          <PrevNextButtons title="Next" condition="inactive"/>
        </Box>
      </Box>

      <OnboardingStats/>
    </StyledProgressIndicatorContainer>
  )
};