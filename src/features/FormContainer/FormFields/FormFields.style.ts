import React from "react";
import styled from "styled-components";

export const StyledFormFields = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
width: 400px;
height: 370px;
background: #FFFFFF;
flex: none;
order: 6;
flex-grow: 0;
& .InputField {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 400px;
  height: 71px;
  flex: none;
  order: 0;
  flex-grow: 0;
  & #eye-icon {
    position: relative;
    right: -86%;
    position: relative;
    top: -24px;
  }
}
& #bottom-title {
  display: flex;
  flex-direction: row-reverse;
  order: 10;
  margin-top: 1rem;
  & > span {
    justify-content: flex-end;
  }
  & a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;
    color: #32ABF2;
    margin-left: 4px;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
}
`;