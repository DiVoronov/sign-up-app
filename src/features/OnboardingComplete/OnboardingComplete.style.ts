import React from "react";
import styled from "styled-components";

export const StyledOnboardingComplete = styled.div`
position: relative;
width: 1443px;
height: 900px;
background: #F9F9FA;

& img {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 29px;
  top: 38px;
  opacity: .5;
  border-radius: 50%;
}
& #nameText {
  position: absolute;
  width: 134px;
  height: 28px;
  left: 31px;
  top: 148px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
`;