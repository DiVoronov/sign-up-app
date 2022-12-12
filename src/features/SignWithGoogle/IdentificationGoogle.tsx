import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { SignWithGoogle } from "./SignWithGoogle";
import { FooterGoogleSign } from "./FooterGoogleSign";
import { ConnectGoogleFirst } from "./ConnectGoogleFirst";
import { ConnectGoogleSecond } from "./ConnectGoogleSecond";
import { LoadingGoogle } from "./LoadingGoogle";

export const IdentificationGoogle = () => {

  const statusIdentificationGoogle = useSelector( (state: RootState) => state.identificationGoogle);
  const statusIdentificationGoogleObject = useSelector( (state: RootState) => state.identificationGoogleObject);
  const statusIsLoadingGoogle = useSelector( (state: RootState) => state.isLoadingGoogle);

  useEffect( () => {
    console.log(statusIdentificationGoogleObject);
    
  }, [statusIdentificationGoogleObject])

  return (

    <Box>
      {
        statusIdentificationGoogle
        &&
        (
          (statusIdentificationGoogleObject.title === null)
          ?
          <>
            <SignWithGoogle title="ff" children={<ConnectGoogleFirst title="ggg"/>}/>
            <FooterGoogleSign/>
          </>
          :
          <>
            <SignWithGoogle title="ff" children={<ConnectGoogleSecond title={`${statusIdentificationGoogleObject.title}`} color={`${statusIdentificationGoogleObject.color}`}/>}/>
            <FooterGoogleSign/>
          </>
        )
      }
      { statusIsLoadingGoogle && <LoadingGoogle/> }
    </Box>
  );
};

          {/* <SignWithGoogle title="ff" children={<ConnectGoogleFirst title="ggg"/>}/> */}
          {/* <SignWithGoogle title="ff" children={<ConnectGoogleSecond title="gigachad@gmail.com" color="#32ABF2"/>}/> */}
          {/* <FooterGoogleSign/> */}
          {/* <LoadingGoogle/> */}

