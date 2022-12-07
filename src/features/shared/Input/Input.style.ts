import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 10px 10px 17px;
gap: 10px;
width: 400px;
height: 45px;
background: #F8F9FC;
border-radius: 4px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
border: none;
outline: none;
&::placeholder {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #C3CAD5;
  flex: none;
  order: 0;
  flex-grow: 1;
}
`;

// outline if active : #32ABF2