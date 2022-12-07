import React from "react";
import styled from "styled-components";

export const StyledPrevNextButtons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 8px;
width: 84px;
height: 33px;
background: ${ props => props.theme.background};
border-radius: 4px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* display: flex;
align-items: center; */
letter-spacing: -0.01em;
color: #93A8C1;
`;