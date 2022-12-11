import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { StyledInput } from "./Input.style";

import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
// import { Input as MUInput } from "@mui/material/";
import FormHelperText from "@mui/material/FormHelperText";

import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPassword } from "../../../app/Slices/welcomeCreateAccountSlice";
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
  }, [valueInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
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
        id="outlined-input"
        aria-describedby="outlined-input-helper-text"
        theme={theme}
      >
        
      </StyledInput>
      { 
        ((!isEmpty && valueInput) || (isEmpty && valueInput) || !isEmpty) 
        ?
        <></>
        :
        <span id="errorMessage">This field cannot be tempty</span>
      }
    </Box>
  );
};

// export const Input = ( { type, placeholder, value, formHelperText }: IInputProps ) => {

//   const [ valueInput, setValueInput ] = useState("");

//   const dispatch = useDispatch();

//   useEffect( () => {
//     type === "text" && dispatch(setName(valueInput));
//     type === "email" && dispatch(setEmail(valueInput));
//     type === "password" && dispatch(setPassword(valueInput));
//   }, [valueInput]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValueInput(event.target.value);
//   };

//   return (
//     <FormControl variant="outlined" sx={{flexDirection: "column-reverse", ["& > div"]: {border: "none !important"}}}>
//       <OutlinedInput
//         id="outlined-adornment-weight"
//         value={value}
//         onChange={handleChange}
//         aria-describedby="outlined-weight-helper-text"
//         inputProps={{
//           "aria-label": "weight",
//         }}
//         placeholder={placeholder}
//         type={type}
//         sx={styleOfInput}
//       />
//       {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
//     </FormControl>
//   );
// };