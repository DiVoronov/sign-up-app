import React from "react";
import styled from "styled-components";

export const StyledLoadingGoogle = styled.div`
position: fixed;
top: 0px;
left: 0px;
width: 100%;
height: 900px;
background: #FFFFFF;

& #boxLoading {
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
}

@media screen and (max-width: 450px) {
  width: 400px;
  height: 900px;
}
`;