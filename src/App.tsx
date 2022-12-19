import React from "react";
import { Box } from "@mui/material";
import { GlobalStyle } from "./GlobalStyle";
import { OnboardingComplete } from "./features/OnboardingComplete/OnboardingComplete";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { IdentificationGoogle } from "./features/SignWithGoogle/IdentificationGoogle";
import { MainRegistrationProgressComponent } from "./features/MainRegistrationProgressComponent/MainRegistrationProgressComponent";

function App() {

  const statusIsRegistrationDone = useSelector( (state: RootState) => state.isRegistrationDone);
  const statusIdentificationGoogle = useSelector( (state: RootState) => state.identificationGoogle);

  return (
    <Box className="App">
      <GlobalStyle/>
      { 
        statusIsRegistrationDone
        ?
        <OnboardingComplete/>
        :
        !statusIdentificationGoogle
        ?
        <MainRegistrationProgressComponent/>
        :
        <IdentificationGoogle/>
      }
    </Box>
  );
};

export default App;
