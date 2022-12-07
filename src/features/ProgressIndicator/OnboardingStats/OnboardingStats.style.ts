import React from "react";
import styled from "styled-components";

export const StyledOnboardingStats = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;

width: 364px;
height: 119px;

flex: none;
order: 1;
flex-grow: 0;
& > #OnboardingStats-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 364px;
  height: 95px;
  background: #134267;
  border-radius: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
  & > p {
    width: 275px;
    height: 63px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #96CAF7;
    flex: none;
    order: 1;
    flex-grow: 1;
  }
  & > h1 {
    width: 41px;
    height: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #96CAF7;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}
& #CircleBox {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 88px;
  height: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  
}
`