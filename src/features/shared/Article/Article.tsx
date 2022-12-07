import React from "react";
import { Box } from "@mui/material";

interface IArticleProps {
  title: string
};

export const Article = ( { title }: IArticleProps ) => {

  return (
    <Box component="h3">
      { title }
    </Box>
  );
};