import React from "react";
import styled from "styled-components";

export const StyledProgressIndicatorContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 150px 50px;
/* padding-top: 200px 102px 56px; */
min-width: 470px;
/* width: 35%; */
gap: 162px;

/* position: absolute; */
/* min-width: 36%; */
/* max-width: 568px; */
height: 900px;
left: 0px;
top: 0px;

background: linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%);

@media screen and (max-width: 450px) {
  display: none;
}
`;