import React from "react";
import styled from "styled-components";

export const StyledSignWithGoogle = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
margin: 90px auto 1rem auto;
width: 470px;
background: #FFFFFF;
border: 1px solid #BEC0C7;
border-radius: 12px;
& #first-line {
  width: 469px;
  height: 0px;
  border-bottom: 1px solid #BEC0C7;
}

@media screen and (max-width: 450px) {
  width: 350px;
  & #first-line {
    width: 350px;
  }
}
`;