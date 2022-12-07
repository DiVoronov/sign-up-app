import React from "react";
import { Box } from "@mui/material";

interface IHeaderProps {
  title: string
};

export const Header = ( { title }: IHeaderProps ) => {

  return (
    <Box component="h1">
      { title }
    </Box>
  );
};


