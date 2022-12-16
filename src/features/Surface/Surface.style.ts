import React from "react";
import styled from "styled-components";

export const StyledSurface = styled.div`
position: absolute;
/* width: 872px; */
width: 100%;
/* height: 900px; */
left: 568px;
top: 0px;
background-image: url(${ props => props.theme.url});
& > svg {
  position: absolute;
  top: 0%;
  bottom: -1.33%;
}

@media screen and (max-width: 450px) {
  display: none;
}
`;