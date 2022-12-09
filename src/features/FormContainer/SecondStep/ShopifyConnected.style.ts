import React from "react";
import styled from "styled-components";

export const StyledShopifyConnected = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
text-align: center;
width: 100%;
& #bottom-title {
  display: flex;
  flex-direction: row-reverse;
  order: 10;
  & > span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
  }
}
`;