import React from "react";
import { Box } from "@mui/material";
import { StyledArticle } from "./Article.style";

interface IArticleProps {
  title: string
};

export const Article = ( { title }: IArticleProps ) => {

  return (
    <StyledArticle>
      { title }
    </StyledArticle>
  );
};