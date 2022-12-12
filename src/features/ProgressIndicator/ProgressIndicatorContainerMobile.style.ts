import React from "react";
import styled from "styled-components";

export const StyledProgressIndicatorContainerMobile = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin: 1rem 0px;
background: none;

& #prevNextButtons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

@media screen and (min-width: 450px) {
  display: none;
}
`;