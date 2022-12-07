import React, { useState } from "react";
import { Box } from "@mui/material";
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

  const [isVisiblePassword, setIsVisiblePassword] = useState("password");

  const handleClickShowPassword = () => {
    setIsVisiblePassword( isVisiblePassword === "password" ? "text" : "password");
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <StyledFormFields>
      <Box className="InputField">
        <Article title="Email"/>
        <Input type="email" placeholder="megachad@trychad.com"/>
      </Box>
      <Box className="InputField">
        <Article title="Your name"/>
        <Input type="text" placeholder="Mega Chad"/>
      </Box>
      <Box className="InputField">
        <Article title="Password"/>
        <Box id="forEye">
          <Input type={isVisiblePassword} placeholder="Enter password"/>

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