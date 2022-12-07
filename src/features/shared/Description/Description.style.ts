import React from "react";
import styled from "styled-components";

export const StyledDescription = styled.span`
width: ${props => props.theme.width};
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
letter-spacing: -0.01em;
color: ${props => props.theme.color};
flex: none;
order: 4;
align-self: stretch;
flex-grow: 0;
`