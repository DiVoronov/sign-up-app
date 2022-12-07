import React from "react";
import { Box } from "@mui/material";

// import { ReactComponent as Prev } from "./Prev.svg";
// import { ReactComponent as Next } from "./Next.svg";
import Prev from "./Prev.svg";
import Next from "./Next.svg";
import { StyledPrevNextButtons } from "./PrevNextButtons.style";

interface IPrevNextButtonsProps {
  title: string
  condition: string
};

export const PrevNextButtons = ( { title, condition }: IPrevNextButtonsProps ) => {

  const background = () => condition === "active" ? "#134267" : "none";

  const theme = {
    background: background,
  };

  return (
    <StyledPrevNextButtons theme={theme}>
      { title === "Back" && <img src={Prev}/> }
      {/* <button style={{textDecoration: "none", background: "none", color: "#93A8C1", border: "none"}}> */}
        { title }
      {/* </button> */}
      { title === "Next" && <img src={Next}/> }
    </StyledPrevNextButtons>
  );
};