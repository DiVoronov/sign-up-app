import React from "react";
import { Box } from "@mui/material";
import { StyledAlert } from "./Alert.style";
import CloseIcon from "@mui/icons-material/Close";
import { Description } from "../Description/Description";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { setAlertActive } from "../../../app/Slices/isAlertActive";

interface IAlertProps {
  children: React.ReactNode
  boldTitle: string
  alertType: string
  isSecondAlert?: boolean
};

export const Alert = ( { children, boldTitle, alertType, isSecondAlert }: IAlertProps ) => {

  const statusAlert = useSelector( (state: RootState) => state.isAlertActive);
  const dispatch = useDispatch();

  const colorBackground = alertType === "success" ? "#F3FCF4" : "#FEF0F0";
  const colorTitle = alertType === "success" ? "#65BD47" : "#D24646";
  const colorBeforeElement = alertType === "success" ? "#65BD47" : "#D24646";
  const isSecond = isSecondAlert ? "105px" : "39px";

  const theme = {
    colorBackground,
    colorTitle,
    colorBeforeElement,
    isSecond,
  }

  const colorCloseIcon = alertType === "success" ? "success" : "error";

  return (
    <StyledAlert theme={theme}>
      <Box>
        <Box component="span">
          <Description size="12px" width="100%" color={colorTitle}>{ children }</Description>
          <Description size="12px" width="100%" color={colorTitle} weight="600">{ boldTitle }</Description>
        </Box>
      <CloseIcon color={colorCloseIcon} fontSize="small" onClick={() => dispatch(setAlertActive(false))}/>
      </Box>
    </StyledAlert>
  );
};