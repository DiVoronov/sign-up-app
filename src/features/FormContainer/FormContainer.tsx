import React from "react";
import { Box } from "@mui/material";
import { StyledFormContainer } from "./FormContainer.style";
import { Header } from "../shared/Header/Header";
import { Description } from "../shared/Description/Description";
import { FormFields } from "./FormFields/FormFields";
import { ContainerShared } from "../shared/Container/ContainerShared";
import { ChadLogoHeader } from "../shared/ChadLogoHeader/ChadLogoHeader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { ConnectionProcessShopify } from "./SecondStep/ConnectionProcessShopify";
import { ShopifyConnected } from "./SecondStep/ShopifyConnected";
import { ConnectionProcessEmail } from "./ThirdStep/ConnectionProcessEmail";
import { DoNotUse } from "../shared/DoNotUse/DoNotUse";
import { SuccessPage } from "./SecondStep/SuccessPage";
import { OnboardingComplete } from "../OnboardingComplete/OnboardingComplete";
import { Modal } from "../OnboardingComplete/Modal";

export const FormContainer = ( ) => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);
  const statusIsCreateAccount = useSelector( (state: RootState) => state.isCreateAccountDone);
  const statusConnectShopify = useSelector( (state: RootState) => state.connectShopify);
  const statusConnectShopifyStore = useSelector( (state: RootState) => state.isConnectShopifyStore);
  const statusConnectEmail = useSelector( (state: RootState) => state.connectEmail);
  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);

  const statusDotUseShopify = useSelector( (state: RootState) => state.doNotUseShopify);
  const statusDotUseGoogle = useSelector( (state: RootState) => state.doNotUseGoogle);
  

  const optionsArrayShopify = [
    { id: 1, value: "Salesforce" },
    { id: 2, value: "Ecwid" },
    { id: 3, value: "Other" },
  ];

  const optionsArrayGoogle = [
    { id: 1, value: "Microsoft Outlook" },
    { id: 2, value: "Yahoo" },
    { id: 3, value: "Other" },
  ];

  return (
    <StyledFormContainer>
      {
        !statusIsCreateAccount
        ?
        <ContainerShared>
          <ChadLogoHeader/>
          <Box id="spacer" sx={{height: "24px", order: "2"}}></Box>
          <Header title="Welcome to Chad"/>
          <Box id="spacer" sx={{height: "16px", order: "4"}}></Box>
          <Description color="#4F637D" width="100%">Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</Description>
          <Box id="spacer" sx={{height: "32px", order: "5"}}></Box>
          <FormFields/>
        </ContainerShared>
        :
        !statusConnectShopify 
        ?
        <Box>
          { 
            !statusDotUseShopify 
            ? <ConnectionProcessShopify/> 
            : <DoNotUse title="Shopify" description="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform." optionsArray={optionsArrayShopify}/>
          }
        </Box>
          
        :
        !statusConnectShopifyStore
        ?
        <ShopifyConnected/>
        :
        !statusConnectEmail
        ?
        <Box>
          { 
            !statusDotUseGoogle 
            ? <ConnectionProcessEmail/>
            : <DoNotUse title="Google" description="Unfortunately, Chad Beta only integrates with Gmail. Let us know what email client you use to receive customer support emails and we’ll let you know when we add it as an integration." optionsArray={optionsArrayGoogle}/>
          }
        </Box>
        :
        !statusIsRegistrationDone
        ?
        // HERE LOADING
        <SuccessPage title="platform"/>
        :
        <OnboardingComplete title="ffff"/>

        

        // <ShopifyConnected/>
        // <ConnectionProcessEmail/>
        // <SuccessPage title="platform"/>
        // <DoNotUse title="Shopify" description="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform." optionsArray={optionsArrayShopify}/>
        // <DoNotUse title="Google" description="Unfortunately, Chad Beta only integrates with Gmail. Let us know what email client you use to receive customer support emails and we’ll let you know when we add it as an integration." optionsArray={optionsArrayGoogle}/>

      }
      
    </StyledFormContainer>
  );
};