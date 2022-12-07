import React from "react";
import { Box } from "@mui/material";
import { StyledInput } from "./Input.style";

interface IInputProps {
  type: string
  placeholder: string
};

export const Input = ( { type, placeholder }: IInputProps ) => {

  return (
    <StyledInput type={type} placeholder={placeholder}>
      
    </StyledInput>
  );
};