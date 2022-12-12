import React from "react";
import styled from "styled-components";

export const StyledOnboardingComplete = styled.div`
position: absolute;
width: 1443px;
height: 900px;
background: #F9F9FA;
z-index: 1000;

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
  color: #576168;
  background: #0f2330;
  padding-left: 1rem;
}

@media screen and (max-width: 450px) {
  position: flex;
  width: 400px;
  height: 900px;
  background: none;
  z-index: 1000;
  margin: auto;
}
`;