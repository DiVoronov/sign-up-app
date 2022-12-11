import React from "react";
import styled from "styled-components";

export const StyledDescription = styled.span`
width: ${props => props.theme.width};
font-family: ${props => props.theme.font};
font-style: normal;
font-weight: ${props => props.theme.weight};
font-size: ${props => props.theme.size};
line-height: 21px;
display: flex;
align-items: center;
letter-spacing: -0.01em;
color: ${props => props.theme.color};
flex: none;
order: 4;
align-self: stretch;
flex-grow: 0;
& a {
  cursor: pointer;
  color: ${props => props.theme.accentColor};
}
`