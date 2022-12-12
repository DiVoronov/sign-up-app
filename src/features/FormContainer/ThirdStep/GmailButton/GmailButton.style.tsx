import React from "react";
import styled from "styled-components";

export const StyledGmailButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1px 96px 1px 1px;
gap: 96px;
margin-top: 24px;
background: #5383EC;
border-radius: 2px;
order: 6;
border: none;
cursor: pointer;
& > div {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 14px;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 1px;
}
& > span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  width: max-content;
}

@media screen and (max-width: 450px) {
  width: 326px;
  gap: 50px;
  padding: 1px;
  justify-content: flex-start;
}
`;