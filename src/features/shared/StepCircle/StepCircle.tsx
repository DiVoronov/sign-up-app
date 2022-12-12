import React from "react";
import { Box } from "@mui/material";

import { ReactComponent as InActive } from "./CircleConditionINActive.svg";
import { ReactComponent as ActiveFirst } from "./CircleConditionActiveFirst.svg";
import { ReactComponent as ActiveSecondTick } from "./CircleConditionActiveSecondTick.svg";
import { ReactComponent as ActiveThird } from "./CircleConditionActiveThird.svg";
import { ReactComponent as InActiveTick } from "./CircleConditionINActiveTick.svg";


interface IStatusStepCircleProps {
  status: string
};

export const StepCircle = ( { status }: IStatusStepCircleProps ) => {
  
  return (
    <Box component="div">
      { status === "inactive" 
        ? <InActive/> 
        : status === "activeFirst" 
        ? <ActiveFirst/>
        : status === "activeSecondTick"
        ? <ActiveSecondTick/>
        : status === "activeThird"
        ? <ActiveThird/>
        : status === "inactiveTick"
        && <InActiveTick/>
      }
    </Box>
  );
};