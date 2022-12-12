import React from "react";
import styled from "styled-components";

export const StyledSelect = styled.select`
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
margin: 8px 0px 32px 0px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.01em;
color: #17191C;
flex: none;
order: 0;
flex-grow: 1;
&:focus {
  border: 1px solid #32ABF2;
}

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

@media screen and (max-width: 450px) {
  width: 326px;
  & option {
    width: 326px;
  }
}
`;

export const styleOfInput = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px 10px 10px 17px",
  gap: "10px",
  width: "400px",
  height: "45px",
  background: "#F8F9FC",
  borderRradius: "4px",
  flex: "none",
  order: "1",
  alignSelf: "stretch",
  flexGrow: "0",
  border: "none",
  outline: "none",
  ["&:focus"]: {
    border: "1px solid #32ABF2",
  },
  ["&:hover"]: {
    border: "none !important",
    outline: "none",
  },
  ["&::placeholder"]: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    color: "#C3CAD5",
    flex: "none",
    order: 0,
    flexGrow: 1,
  }
}

// outline if active : #32ABF2