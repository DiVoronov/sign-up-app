import React from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { setName, setEmail, setPassword } from "../../app/Slices/welcomeCreateAccountSlice";
import { setNamePost, setEmailPost, setPasswordPost } from "../../app/Slices/bodyPostSlice";
import { setCreateAccountStatus } from "../../app/Slices/isCreateAccountDoneSlice";
import { setConnectShopify } from "../../app/Slices/connectShopifySlice";
import { setShopTokenPost } from "../../app/Slices/bodyPostSlice";
import { setConnectShopifyStore } from "../../app/Slices/connectShopifyStoreSlice";
import { setAlertActive } from "../../app/Slices/isAlertActive";

export const TempBackNext = () => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);
  const statusIsCreateAccount = useSelector( (state: RootState) => state.isCreateAccountDone);
  const statusConnectShopify = useSelector( (state: RootState) => state.connectShopify);
  const statusConnectShopifyStore = useSelector( (state: RootState) => state.isConnectShopifyStore);
  const statusConnectEmail = useSelector( (state: RootState) => state.connectEmail);
  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);

  const statusDotUseShopify = useSelector( (state: RootState) => state.doNotUseShopify);
  const statusDotUseGoogle = useSelector( (state: RootState) => state.doNotUseGoogle);

  return <></>
};

export const backFunction = (state: RootState, dispatch: AppDispatch) => {
  // const dispatch = useDispatch();
  if (state.isCreateAccountDone && !state.isConnectShopifyStore) {
    console.log(state.welcomeCreateAccount);
    dispatch(setCreateAccountStatus(false));
    dispatch(setName(null));
    dispatch(setEmail(null));
    dispatch(setPassword(null));
    dispatch(setNamePost(null));
    dispatch(setEmailPost(null));
    dispatch(setPasswordPost(null));
    setTimeout( () => {
      console.log(state.welcomeCreateAccount);
      
    }, 1500);
  }
  if (state.isConnectShopifyStore && !state.connectEmail) {
    console.log(state.bodyPost);

    dispatch(setShopTokenPost(null));
    dispatch(setConnectShopifyStore(false));
    dispatch(setConnectShopify(false));
    setTimeout( () => {
      console.log(state.bodyPost);
      
    }, 1500);
  }
};

export const nextFunction = (state: RootState, dispatch: AppDispatch) => {
  dispatch(setAlertActive(true));
  setTimeout( () => {
    dispatch(setAlertActive(false));
  }, 2000);
  // should call an alert "Please fill fields / connect your Shopify account / Google account"
};