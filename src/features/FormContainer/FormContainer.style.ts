import React from "react";
import styled from "styled-components";

export const StyledFormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
flex-wrap: wrap;
/* padding: 132px 0px 0px; */
padding-top: 100px;
/* position: absolute; */
/* width: 872px; */
width: 100%;
height: 900px;
/* left: 568px;
top: 0px; */

background-image: url(${process.env.PUBLIC_URL + '/surface.png'});

@media screen and (max-width: 450px) {
  background-image: none;
  position: relative;
  left: 0px;
  top: 0px;
  /* width: 872px; */
  /* height: 450px;
  left: 0px;
  top: 0px; */
}
`