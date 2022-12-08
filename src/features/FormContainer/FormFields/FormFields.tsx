import React, { useState } from "react";
import { Box, FormControl } from "@mui/material";
import { StyledFormFields } from "./FormFields.style";
import { Article } from "../../shared/Article/Article";
import { Input } from "../../shared/Input/Input";
import { MainButton } from "../../shared/MainButton/MainButton";
import { Description } from "../../shared/Description/Description";

import { ReactComponent as IconEye } from "../../shared/Input/IconEye.svg";
import { ReactComponent as IconEyeOff } from "../../shared/Input/IconEyeOff.svg";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const FormFields = () => {

  const [ valueName, setValueName ] = useState("");
  const [ valueEmail, setValueEmail ] = useState("");
  const [ valuePassword, setValuePassword ] = useState("");

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

  return (
    <StyledFormFields>
      <Box className="InputField">
        <Article title="Email"/>
        <Input type="email" placeholder="megachad@trychad.com" 
        // value={valueName} 
        />
      </Box>
      <Box className="InputField">
        <Article title="Your name"/>

        <FormControl onChange={ (event) => handleValueName(event) }>
          <Input type="text" placeholder="Mega Chad" 
          // value={valueEmail}
          />
        </FormControl>
        
      </Box>
      <Box className="InputField">
        <Article title="Password"/>
        <Box id="forEye">

          <FormControl onChange={ () => {} }>
            <Input type={isVisiblePassword} placeholder="Enter password" 
            // value={valuePassword}
            />
          </FormControl>

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
      </Box>
      <MainButton title="Create account"/>
      <Box component="span" id="bottom-title">
        <Description width="100%" color="#4F637D">Already have an account?</Description>
        <Box component="a">Login</Box>
      </Box>
    </StyledFormFields>
  );
};