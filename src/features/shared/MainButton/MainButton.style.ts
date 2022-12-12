import React from "react";
import styled from "styled-components";

export const StyledMainButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 0px;
gap: 10px;
width: 400px;
height: 43px;
background: #32ABF2;
border-radius: 8px;
flex: none;
order: 6;
align-self: stretch;
flex-grow: 0;
border: none;
cursor: pointer;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;
letter-spacing: -0.01em;
color: #FFFFFF;

@media screen and (max-width: 450px) {
  width: 326px;
}
`;