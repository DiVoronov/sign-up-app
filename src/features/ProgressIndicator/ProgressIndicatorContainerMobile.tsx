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
import { StyledProgressIndicatorContainerMobile } from "./ProgressIndicatorContainerMobile.style";
import { Description } from "../shared/Description/Description";
import { backFunction, nextFunction } from "./BackNextFunctions";

import { ReactComponent as ProgressBar1 } from "./ProgressBar1.svg";
import { ReactComponent as ProgressBar2 } from "./ProgressBar2.svg";
import { ReactComponent as ProgressBar3 } from "./ProgressBar3.svg";

export const ProgressIndicatorContainerMobile = () => {

  const allState = useSelector( (state: RootState) => state);
  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);
  const statusIsCreateAccount = useSelector( (state: RootState) => state.isCreateAccountDone);
  const statusConnectShopify = useSelector( (state: RootState) => state.connectShopify);
  const statusConnectShopifyStore = useSelector( (state: RootState) => state.isConnectShopifyStore);
  const statusConnectEmail = useSelector( (state: RootState) => state.connectEmail);
  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);
  const dispatch = useDispatch();

  const isAccountCreate = () => {
    if (
      statusWelcomeCreateAccount.name &&
      statusWelcomeCreateAccount.email &&
      statusWelcomeCreateAccount.password && !statusIsCreateAccount
    ) {
      return "activeThird";
    } else if (
      statusIsCreateAccount
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

    const isCurrentStageDone = ( previousLineStatus: string, currentStageStatus: boolean, nextItemStatus?: boolean) => 
    (previousLineStatus === "active" && !currentStageStatus)
      ? "activeFirst" 
      : (previousLineStatus === "active" && currentStageStatus && nextItemStatus)
      ? "activeThird"
      : (previousLineStatus === "active" && currentStageStatus && !nextItemStatus)
      ? "activeSecondTick"
      : "inactive";

  const statusFirstLine = () => statusIsCreateAccount ? "active" : "inactive";
  const statusFirstLineString = statusFirstLine();

  const isConnectShopifyString = isCurrentStageDone(statusFirstLineString, statusConnectShopifyStore, statusConnectEmail);

  const statusSecondLine = () => isConnectShopifyString === "activeSecondTick" ? "active" : "inactive";
  const statusSecondLineString = statusSecondLine();

  const isConnectEmailString = isCurrentStageDone(statusSecondLineString, statusConnectEmail, statusIsRegistrationDone);

  const statusThirdLine = () => isConnectEmailString === "activeSecondTick" ? "active" : "inactive";
  const statusThirdLineString = statusThirdLine();

  const isRegistrationDoneString = isCurrentStageDone(statusThirdLineString, statusIsRegistrationDone);

  const stepNumber = () => 
    !statusIsCreateAccount 
    ? "1"
    : 
    !statusConnectShopifyStore 
    ? "2"
    :
    !statusConnectEmail && "3"
  ;
  const stepNumberString = stepNumber();

  return (
    <StyledProgressIndicatorContainerMobile>
      
      <Box>
        <Description width="100%" color="#4F637D" size="12px">{`Step ${stepNumberString} of 4`}</Description>
      </Box>

      <Box>
        { 
          !statusIsCreateAccount 
          ? <ProgressBar1/>
          : 
          !statusConnectShopifyStore 
          ? <ProgressBar2/>
          :
          !statusConnectEmail && <ProgressBar3/>
        }
      </Box>

      <Box id="prevNextButtons">
        <PrevNextButtons title="Back" condition="active" isMobile={true} callback={() => backFunction(allState, dispatch)}/>
        <PrevNextButtons title="Next" condition="inactive" isMobile={true} callback={() => nextFunction(allState, dispatch)}/>
      </Box>

    </StyledProgressIndicatorContainerMobile>
  );
};