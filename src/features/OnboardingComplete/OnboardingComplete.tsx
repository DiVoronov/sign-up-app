import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { StyledOnboardingComplete, StyledSharedContainerReady } from "./OnboardingComplete.style";

import { ReactComponent as OnboardingCompleteSVG } from "./svg/OnboardingComplete.svg";
import { Modal } from "./Modal";
import { Article } from "../shared/Article/Article";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { useGetGoogleQuery, useGetShopifyQuery, usePostRegisterMutation } from "../../app/api/signUp.api";
import { ReactComponent as Success } from "../FormContainer/SecondStep/Success.svg";
import { ContainerShared } from "../shared/Container/ContainerShared";
import { Description } from "../shared/Description/Description";
import { MainButton } from "../shared/MainButton/MainButton";
import { IBodyPOST } from "../../app/api/signUp.types";
import { IInitialState } from "../../app/Slices/bodyPostSlice";
import { setAlertActive } from "../../app/Slices/isAlertActive";
import { Alert } from "../shared/Alert/Alert";

export const OnboardingComplete = () => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);
  const statusAlert = useSelector( (state: RootState) => state.isAlertActive);

  const bodyPost: IInitialState = useSelector( (state: RootState) => state.bodyPost);
  const bodyPostObject = () => {
    return {  
      name: (bodyPost.name !== null) ? bodyPost!.name : "Unknown",
      email: (bodyPost.email !== null) ? bodyPost!.email : "Unknown",
      password: (bodyPost.password !== null) ? bodyPost!.password : "Unknown",
      shop_token: (bodyPost.shop_token !== null) ? bodyPost!.shop_token : "Unknown",
      google_token: (bodyPost.google_token !== null) ? bodyPost!.google_token : "Unknown",
    }};
  const bodyPostObjectCall = bodyPostObject();

  const nameFromSlice = () => statusWelcomeCreateAccount.name ? statusWelcomeCreateAccount.name : "Unknown Person";

  const { data: dataShopify, error: errorShopify, isLoading: isLoadingShopify } = useGetShopifyQuery(`${nameFromSlice}`);
  const { data: dataGoogle, error: errorGoogle, isLoading: isLoadingGoogle } = useGetGoogleQuery();

  const [ updatePost, result ] = usePostRegisterMutation();
  const dispatch = useDispatch();

  useEffect( () => { 
    updatePost(bodyPostObjectCall);
    dispatch(setAlertActive(true));
    setTimeout( () => {
      dispatch(setAlertActive(false));
    }, 2000);
  }, []);

  useEffect( () => {
    console.log(result);
  }, [result])

  return (
    <StyledOnboardingComplete>
      <Box sx={{display: {xs: "flex", sm: "none"}}}>
        <StyledSharedContainerReady>
          <Box sx={{display: "flex", flexDirection: "column", gap: "8px", textAlign: "center"}}>
            <Box sx={{mb: 1}}><Success/></Box>
            <Article title="You???re ready to go!" size="16px"/>
            <Description color="#4F637D" width="100%" size="14px">Chad doesn???t support mobile browsers. To access your dashboard, login from your laptop or desktop computer.</Description>
            <MainButton title="Done"/>
          </Box>
        </StyledSharedContainerReady>
      </Box>

      <Box sx={{display: {xs: "none", sm: "flex"}}}>
        <OnboardingCompleteSVG/>
        {
          dataShopify && <img src={dataShopify?.shop_logo_url}/>
        }
        {
          dataShopify && <span id="nameText">{ dataShopify?.shop_name }</span>
        }
        <Modal title="ff"/>
      
        {
          statusAlert
          &&
          <Alert boldTitle={ `${dataShopify ? dataShopify?.shop_name : "was not connected"}` } alertType={`${dataShopify ? "success" : "error"}`}>{ dataShopify ? "Shopify account connected" : "Shopify account" }
          </Alert>
        }
        {
          statusAlert
          &&
          <Alert isSecondAlert={true} boldTitle={ `${ dataGoogle?.status === "success" ? statusWelcomeCreateAccount.email : "was not connected" }` } alertType={`${dataGoogle?.status === "success" ? "success" : "error"}`}>{ dataGoogle?.status === "success" ? "Customer support email connected" : "Customer support email"}
          </Alert>
        }
      </Box>
    </StyledOnboardingComplete>
  );
};