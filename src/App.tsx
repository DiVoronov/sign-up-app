import React from "react";
import { Box } from "@mui/material";
import { ProgressIndicatorContainer } from "./features/ProgressIndicator/ProgressIndicatorContainer";
import { GlobalStyle } from "./GlobalStyle";
import { Surface } from "./features/Surface/Surface";
import { FormContainer } from "./features/FormContainer/FormContainer";
import { OnboardingComplete } from "./features/OnboardingComplete/OnboardingComplete";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { IdentificationGoogle } from "./features/SignWithGoogle/IdentificationGoogle";

function App() {

  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);
  const statusIdentificationGoogle = useSelector( (state: RootState) => state.identificationGoogle);

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
        <Box component="div" sx={{width: "100%", minHeight: "100%", background: "#FFFFFF", display: "flex"}}>
          <Surface/>
          <ProgressIndicatorContainer/>
          <FormContainer/>
        </Box>
        :
        <IdentificationGoogle/>
      }
    </div>
  );
};

export default App;
