import React from "react";
import { Box } from "@mui/material";

interface IDescriptionProps {
  title: string
};

export const Description = ( { title }: IDescriptionProps ) => {

  return (
    <Box component="span">
      { title }
    </Box>
  );
};