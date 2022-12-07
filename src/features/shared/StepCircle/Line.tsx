import React, { ReactNode, FC } from "react";
import { Box } from "@mui/material";

import { ReactComponent as InActive } from "./LineInActive.svg";
import { ReactComponent as Active } from "./LineActive.svg";

interface IStatusStepCircleProps {
  status: string
};

export const Line = ( { status }: IStatusStepCircleProps ) => {
  return (
    <Box component="div">
      { status === "inactive" 
        ? <InActive/> 
        : status === "active" 
        && <Active/>
      }
    </Box>
  );
};
