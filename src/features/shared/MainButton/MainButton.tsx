import React from "react";
import { StyledMainButton } from "./MainButton.style";

interface IMainButtonProps {
  title: string
  callback?: () => void
};

export const MainButton = ( { title, callback }: IMainButtonProps ) => {

  return (
    <StyledMainButton
      onClick={callback}
    >
      { title }
    </StyledMainButton>
  );
};