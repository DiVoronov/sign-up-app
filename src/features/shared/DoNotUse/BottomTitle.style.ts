import React from "react";
import styled from "styled-components";

export const StyledBottomTitle = styled.span`
display: flex;
flex-direction: row-reverse;
justify-content: center;
order: 10;
& > span {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: fit-content;
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
  width: max-content;
  &:hover {
    cursor: pointer;
}
`;