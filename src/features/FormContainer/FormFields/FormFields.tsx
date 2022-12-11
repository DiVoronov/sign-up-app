import React, { useState } from "react";
import { Box, FormControl } from "@mui/material";
import { StyledFormFields } from "./FormFields.style";
import { Article } from "../../shared/Article/Article";
import { Input } from "../../shared/Input/Input";
import { MainButton } from "../../shared/MainButton/MainButton";
import { Description } from "../../shared/Description/Description";
import { useSelector, useDispatch } from "react-redux";
import { setCreateAccountStatus } from "../../../app/Slices/isCreateAccountDoneSlice";
import { RootState } from "../../../app/store";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const FormFields = () => {

  const [ isEmpty, setIsEmpty ] = useState(false);

  const [isVisiblePassword, setIsVisiblePassword] = useState("password");

  const handleClickShowPassword = () => {
    setIsVisiblePassword( isVisiblePassword === "password" ? "text" : "password");
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  function handleValueName (event: React.FormEvent<HTMLDivElement>) {
    // console.log(event.target.dispatchEvent(event));
    
    // setValueName(event.target)
  };

  // from MainButton
  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);

  const dispatch = useDispatch();
  function completeCreationAccount () {
    setIsEmpty(true);
    // console.log("!!!");
    // console.log(
    //   statusWelcomeCreateAccount.name,
    //   statusWelcomeCreateAccount.email,
    //   statusWelcomeCreateAccount.password
    // );
    
    (
      statusWelcomeCreateAccount.name &&
      statusWelcomeCreateAccount.email &&
      statusWelcomeCreateAccount.password
    ) 
    &&
    dispatch(setCreateAccountStatus(true));
  };

  return (
    <StyledFormFields>
      <Box className="InputField">
        <Article title="Email"/>
        <Input type="email" placeholder="megachad@trychad.com" isEmpty={isEmpty} />
      </Box>
      <Box className="InputField">
        <Article title="Your name"/>

        <FormControl onChange={ (event) => handleValueName(event) }>
          <Input type="text" placeholder="Mega Chad" isEmpty={isEmpty} />
        </FormControl>
        
      </Box>
      <Box className="InputField">
        <Article title="Password"/>
        
        <Box id="forEye">
          <InputAdornment position="end" id="eye-icon">
            <IconButton
              aria-label="toggle password visibility" 
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {isVisiblePassword === "password" ? <Visibility /> : <VisibilityOff /> }
            </IconButton>
          </InputAdornment>
        </Box> 

        <FormControl>
          <Input type={isVisiblePassword} placeholder="Enter password" isEmpty={isEmpty} />
          
        </FormControl>

        
        
      </Box>
      <Box sx={{m: 2}}></Box>
      <MainButton title="Create account" callback={completeCreationAccount}/>
      <Box component="span" id="bottom-title">
        <Description width="100%" color="#4F637D">Already have an account?</Description>
        <Box component="a">Login</Box>
      </Box>
    </StyledFormFields>
  );
};