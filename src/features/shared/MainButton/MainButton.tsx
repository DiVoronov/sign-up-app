import React from "react";
import { Box } from "@mui/material";
import { StyledMainButton } from "./MainButton.style";
import { useSelector, useDispatch } from "react-redux";
import { setCreateAccountStatus } from "../../../app/Slices/isCreateAccountDoneSlice";
import { RootState } from "../../../app/store";

interface IMainButtonProps {
  title: string
};

export const MainButton = ( { title }: IMainButtonProps ) => {

  const statusWelcomeCreateAccount = useSelector( (state: RootState) => state.welcomeCreateAccount);

  const dispatch = useDispatch();
  function completeCreationAccount () {
    console.log("!!!");
    (
      statusWelcomeCreateAccount.name &&
      statusWelcomeCreateAccount.email &&
      statusWelcomeCreateAccount.password
    ) 
    &&
    dispatch(setCreateAccountStatus(true));
  };

  return (
    <StyledMainButton
      onClick={completeCreationAccount}
    >
      { title }
    </StyledMainButton>
  );
};