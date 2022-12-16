import React from "react";
import styled from "styled-components";

export const StyledSuccessReady = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 64px 40px;
width: 480px;
min-height: 511px;
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
border-radius: 8px;
flex: none;

& #success-box-inner {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 64px 40px;
  width: 100%;
  min-height: 511px;
}

& button {
  align-self: center;
}

@media screen and (max-width: 450px) {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80%;
  box-shadow: none;
  background: none;
  z-index: 1000;
  margin: auto;
}
`;