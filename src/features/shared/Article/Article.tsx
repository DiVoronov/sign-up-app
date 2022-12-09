import React from "react";
import { Box } from "@mui/material";
import { StyledArticle } from "./Article.style";

interface IArticleProps {
  title: string
  size?: string
};

export const Article = ( { title, size }: IArticleProps ) => {

  const currentSize = () => size ? size : "12px";

  const theme = {
    size: currentSize,
  }

  return (
    <StyledArticle theme={theme}>
      { title }
    </StyledArticle>
  );
};