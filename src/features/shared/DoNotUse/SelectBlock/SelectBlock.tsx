import React, { useState } from "react";
import { Box } from "@mui/material";
import { StyledOption, StyledSelect } from "./Select.style";
import { Description } from "../../Description/Description";
import { ISelectBlockProps, IOptionsArray } from "../DoNotUse";
import "./select.style.scss";
import { Theme, useTheme } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { ReactComponent as TickCheck } from "./TickCheck.svg";
import { InputOther } from "./InputOther";
import { StyledInput } from "../../Input/Input.style";


// export const SelectBlock = ( { optionsArray }: ISelectBlockProps ) => {

//   const options = [ ...optionsArray ];

//   return (
//     <Box sx={{mt: 4}}>
//       <Description color="#4F637D" size="12px" width="100%">Platform</Description>
//       <StyledSelect
//         placeholder="Select platform"
//       >
//         { 
//           options.map( (option: IOptionsArray) => {
//             return (
              
//                 <StyledOption className="optionStyle" value={`value${option.id.toString()}`} key={option.id}>
//                   { option.value }
//                 </StyledOption>
//             )
//           })
//         }
//       </StyledSelect>
//     </Box>
//   );
// };

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const SelectBlock = ( { optionsArray }: ISelectBlockProps ) => {


  const theme = useTheme();
  const [personName, setPersonName] = useState<string>("");
  const [personNameOther, setPersonNameOther] = useState<string>("");
  const [outline, setOutline] = useState<boolean>(false);
  const [isOther, setIsOther] = useState<boolean>(false);


  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    setPersonName( event.target.value );
    event.target.value === "Other" && setIsOther( true );
  };

  const handleChangeOther = (event: SelectChangeEvent<typeof personName>) => {
    setPersonNameOther( event.target.value );
  };

  const isLabelDisplay = personName ? "none" : "block";

  const themeProps = {
    outline: !outline ? "none" : "1px solid #32ABF2 !important",
    color: "none",
  }

  return (
    <StyledOption theme={themeProps}>
      <Description color="#4F637D" size="12px" weight="500" width="100%">Platform</Description>
      <FormControl sx={{ width: {xs: "326px", md: "400px"}, mt: 1}}>
        <InputLabel id="demo-multiple-chip-label" sx={{ display: isLabelDisplay, color: "#C3CAD5", fontSize: "16px"}}>Select platform</InputLabel>
        {
          isOther 
          ?
          // <InputOther/>
          <StyledInput
            type={"text"} 
            placeholder={"Enter your platform here"} 
            value={personNameOther} 
            onChange={handleChangeOther}
            id="outlined-input"
            aria-describedby="outlined-input-helper-text"
            theme={themeProps}
          >
            
          </StyledInput>
          :
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            // multiple
            value={personName}
            // variant="outlined"
            onChange={handleChange}
            onOpen={ () => setOutline(true) }
            onClose={ () => setOutline(false) }
            input={<Input id="select-multiple-chip"/>}
            // renderValue={(selected) => (
            //   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            //     {selected.map((value) => (
            //       <Chip key={value} label={value} />
            //     ))}
            //   </Box>
            // )}
            MenuProps={MenuProps}
          >
            {optionsArray.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                // style={getStyles(name, personName, theme)}
                aria-selected={true}
                sx={{display: "flex", justifyContent: "space-between"}}
              >
                <div>{option.value}</div>
                <div className="ti-p"><TickCheck/></div>
              </MenuItem>
            ))}
          </Select>
        
        }

      </FormControl>
    </StyledOption>
  );

};



