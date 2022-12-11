import React from "react";
import styled from "styled-components";

export const StyledLoadingGoogle = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
flex-wrap: wrap;
margin: 4rem;

& span {
  align-self: center;
}

& #load {
  animation: rotatedLoad 1s linear infinite 0s;

  @keyframes rotatedLoad {
    100% {
      transform: rotate(360deg);
      transform-origin: center;
    }
  } 
}
`;