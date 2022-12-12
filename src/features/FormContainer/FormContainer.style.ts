import React from "react";
import styled from "styled-components";

export const StyledFormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 132px 0px 0px;
position: absolute;
width: 872px;
height: 900px;
left: 568px;
top: 0px;

@media screen and (max-width: 450px) {
  width: 872px;
  height: 450px;
  left: 0px;
  top: 0px;
}
`