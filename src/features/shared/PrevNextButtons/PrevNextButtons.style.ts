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
background: ${ props => props.theme.background };
border-radius: 4px;
cursor: pointer;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: ${ props => props.theme.size };
line-height: 21px;
letter-spacing: -0.01em;
color: ${ props => props.theme.color };
`;