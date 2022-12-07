import React from "react";
import styled from "styled-components";

export const StyledArticleStep = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: ${ props => props.theme.weight};
font-size: 16px;
line-height: 24px;
letter-spacing: -0.01em;
color: ${ props => props.theme.color};
`;