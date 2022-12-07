import React from "react";
import { Box } from "@mui/material";
import { StyledArticleStep } from "./ArticleStep.style";

interface IArticleStepProps {
  title: string
  condition: string
};

export const ArticleStep = ( { title, condition }: IArticleStepProps ) => {
  
  const color = () => condition === "active" ? "#FFFFFF" : "#5D7FA3";
  const weight = () => condition === "active" ? 500 : 400;

  const theme = {
    color: color,
    weight: weight,
  };

  return (
    <StyledArticleStep theme={theme}>
      { title }
    </StyledArticleStep>
  );
};