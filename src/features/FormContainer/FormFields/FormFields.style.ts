import React from "react";
import styled from "styled-components";

export const StyledFormFields = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
width: 400px;
/* height: 370px; */
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
    right: -350px;
    top: 30px;
    z-index: 50;
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
& #errorMessage {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: #D24646;
}

@media screen and (max-width: 450px) {
  padding-Left: 40px;
  align-items: center;
  flex-wrap: wrap;
  & #bottom-title {
    width: max-content;
    padding-right: 50px;
    & > span {
      width: max-content;
      justify-content: center;
    }
  }
  & .InputField {
    & #eye-icon {
      position: relative;
      right: -270px;
      top: 30px;
      z-index: 50;
    }
  }
}
`;