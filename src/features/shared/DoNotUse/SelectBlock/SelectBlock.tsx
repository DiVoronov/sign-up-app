import React from "react";
import { Box } from "@mui/material";
import { StyledSelect } from "./Select.style";
import { Description } from "../../Description/Description";
import { ISelectBlockProps, IOptionsArray } from "../DoNotUse";

export const SelectBlock = ( { optionsArray }: ISelectBlockProps ) => {

  const options = [ ...optionsArray ];

  return (
    <Box sx={{mt: 4}}>
      <Description color="#4F637D" size="12px" width="100%">Platform</Description>
      <StyledSelect
        placeholder="Select platform"
      >
        { 
          options.map( (option: IOptionsArray) => {
            return (
              
                <option className="optionStyle" value={`value${option.id.toString()}`} key={option.id}>
                  { option.value }
                </option>
            )
          })
        }
      </StyledSelect>
    </Box>
  );
};

