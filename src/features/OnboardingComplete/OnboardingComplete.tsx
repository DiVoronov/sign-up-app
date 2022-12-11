import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { StyledOnboardingComplete } from "./OnboardingComplete.style";

import { ReactComponent as OnboardingCompleteSVG } from "./svg/OnboardingComplete.svg";
import { Modal } from "./Modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { useGetShopifyQuery } from "../../app/api/signUp.api";

interface IOnboardingCompleteProps {
  title: string
};

export const OnboardingComplete = ( { title }: IOnboardingCompleteProps ) => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);

  const { data: dataShopify, error: errorShopify, isLoading: isLoadingShopify } = useGetShopifyQuery("Guilty");

  return (
    <StyledOnboardingComplete>
      <OnboardingCompleteSVG/>
      {
        dataShopify && <img src={dataShopify?.shop_logo_url}/>
      }
      {
        dataShopify && <span id="nameText">{ dataShopify?.shop_name }</span>
      }
      <Modal title="ff"/>
    </StyledOnboardingComplete>
  );
};