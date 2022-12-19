import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { StyledInput } from "./Input.style";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPassword } from "../../../app/Slices/welcomeCreateAccountSlice";
import { setNamePost, setEmailPost, setPasswordPost } from "../../../app/Slices/bodyPostSlice";
import { setCreateAccountStatus } from "../../../app/Slices/isCreateAccountDoneSlice";

interface IInputProps {
  type: string
  placeholder: string
  formHelperText?: string
  value?: string
  isEmpty?: boolean
};

export const Input = ( { type, placeholder, value, isEmpty }: IInputProps ) => {
  
  const [ valueInput, setValueInput ] = useState("");

  const dispatch = useDispatch();

  useEffect( () => {
    !valueInput && dispatch(setCreateAccountStatus(false));
    type === "text" && dispatch(setName(valueInput));
    type === "email" && dispatch(setEmail(valueInput));
    type === "password" && dispatch(setPassword(valueInput));

    type === "text" && dispatch(setNamePost(valueInput));
    type === "email" && dispatch(setEmailPost(valueInput));
    type === "password" && dispatch(setPasswordPost(valueInput));

  }, [valueInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const isEmptyColor = () => ((!isEmpty && valueInput) || (isEmpty && valueInput) || !isEmpty) ? "none" : "1px solid #D24646"
  const theme = {
    color: isEmptyColor,
  };

  return (
    <Box sx={{display: "flex", flexDirection: "column-reverse"}}>
      <StyledInput 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={handleChange}
        id={`outlined-input-${placeholder}`}
        aria-describedby="outlined-input-helper-text"
        theme={theme}
      >
        
      </StyledInput>
      { 
        ((!isEmpty && valueInput) || (isEmpty && valueInput) || !isEmpty) 
        ?
        <></>
        :
        <span id="errorMessage">This field cannot be empty</span>
      }
    </Box>
  );
};
