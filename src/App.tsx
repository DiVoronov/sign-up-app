import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressIndicatorContainer } from "./features/ProgressIndicator/ProgressIndicatorContainer";
import { GlobalStyle } from "./GlobalStyle";
import { Surface } from "./features/Surface/Surface";
import { FormContainer } from "./features/FormContainer/FormContainer";
import { useGetShopifyQuery, useGetGoogleQuery, usePostRegisterMutation } from "./app/api/signUp.api";
import { OnboardingComplete } from "./features/OnboardingComplete/OnboardingComplete";
import { SignWithGoogle } from "./features/SignWithGoogle/SignWithGoogle";
import { FooterGoogleSign } from "./features/SignWithGoogle/FooterGoogleSign";
import { ConnectGoogleFirst } from "./features/SignWithGoogle/ConnectGoogleFirst";
import { ConnectGoogleSecond } from "./features/SignWithGoogle/ConnectGoogleSecond";
import { LoadingGoogle } from "./features/SignWithGoogle/LoadingGoogle";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { IdentificationGoogle } from "./features/SignWithGoogle/IdentificationGoogle";

function App() {

  //   fetch('https://vast-basin-98801.herokuapp.com/register/',{
  //     method:"POST",
  //     body:JSON.stringify(
  //         {
  //             name: "NAME",
  //             email: "EMAIL",
  //             password: "PASSWORD",
  //             shop_token: "b0dd6c4e14303eb42358e27bdf9d264e",
  //             google_token: "1d23dd6c4e14302134b42358e27bdf2345264e",
  //         }
  //     ),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  // })
  //     .then(res=>res.json())
  //     .then(json=>console.log(json))

  const bodyPost = {
    name: "name	string",
    email: "email	string",
    password: "password	string",
    shop_token: "b0dd6c4e14303eb42358e27bdf9d264e",
    google_token: "1d23dd6c4e14302134b42358e27bdf2345264e",
  }

  const postString = "https://vast-basin-98801.herokuapp.com/register?name=NAME&email=EMAIL&password=PASSWORD&shop_token=b0dd6c4e14303eb42358e27bdf9d264e&google_token=1d23dd6c4e14302134b42358e27bdf2345264e"

  const { data: dataGoogle, error: errorGoogle, isLoading: isLoadingGoogle } = useGetGoogleQuery();
  const { data: dataShopify, error: errorShopify, isLoading: isLoadingShopify } = useGetShopifyQuery("Guilty");
  const [ updatePost, result ] = usePostRegisterMutation();

  useEffect( () => { 

    console.log(dataGoogle);
    console.log(dataShopify);
    console.log(
      bodyPost,
      result
      );
  }, [dataGoogle, dataShopify, updatePost]);

  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);

  const statusIdentificationGoogle = useSelector( (state: RootState) => state.identificationGoogle);
  const statusIdentificationGoogleObject = useSelector( (state: RootState) => state.identificationGoogleObject);

  return (
    <div className="App">
      <GlobalStyle/>

      { 
        statusIsRegistrationDone
        ?
        <OnboardingComplete title="ffff"/>
        :
        !statusIdentificationGoogle
        ?
        <Box component="div" sx={{width: "100%", minHeight: "100%", background: "#FFFFFF", position: "relative"}}>
          <Surface/>
          <ProgressIndicatorContainer/>
          <FormContainer/>
          {/* <OnboardingComplete title="ff"/> */}
          {/* <SignWithGoogle title="ff" children={<ConnectGoogleFirst title="ggg"/>}/> */}
          {/* <SignWithGoogle title="ff" children={<ConnectGoogleSecond title="gigachad@gmail.com" color="#32ABF2"/>}/> */}
          {/* <FooterGoogleSign/> */}
          {/* <LoadingGoogle/> */}
        </Box>
        :
        <IdentificationGoogle/>
        
        
      }

      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="*" element={<></>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
