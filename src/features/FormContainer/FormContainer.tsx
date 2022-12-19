import React from "react";
import { StyledFormContainer } from "./FormContainer.style";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { ShopifyConnected } from "./SecondStep/ShopifyConnected";
import { SuccessPage } from "./SecondStep/SuccessPage";
import { OnboardingComplete } from "../OnboardingComplete/OnboardingComplete";
import { CreationAccount } from "./FirstStep/CreationAccount";
import { IfDoNotUse } from "./SecondStep/IfDoNotUse";

export const FormContainer = ( ) => {

  const statusIsCreateAccount = useSelector( (state: RootState) => state.isCreateAccountDone);
  const statusConnectShopify = useSelector( (state: RootState) => state.connectShopify);
  const statusConnectShopifyStore = useSelector( (state: RootState) => state.isConnectShopifyStore);
  const statusConnectEmail = useSelector( (state: RootState) => state.connectEmail);
  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);

  return (
    <StyledFormContainer className="styled-form-container">
      {
        !statusIsCreateAccount
        ?
        <CreationAccount/>
        :
        !statusConnectShopify 
        ?
        <IfDoNotUse stepConnection="shopify"/>
        :
        !statusConnectShopifyStore
        ?
        <ShopifyConnected/>
        :
        !statusConnectEmail
        ?
        <IfDoNotUse stepConnection="google"/>
        :
        !statusIsRegistrationDone
        ?
        <SuccessPage title="platform"/>
        :
        <OnboardingComplete/>
      }
    </StyledFormContainer>
  );
};