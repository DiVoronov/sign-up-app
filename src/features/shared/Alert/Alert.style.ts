import React from "react";
import styled from "styled-components";

export const StyledAlert = styled.div`
display: flex;
align-items: flex-start;
padding: 12px 18px 12px 24px;
gap: 10px;
overflow: hidden;

width: 308px;
height: 60px;

position: fixed;
right: 20px;
top: ${ props => props.theme.isSecond };

background: ${ props => props.theme.colorBackground };

box-shadow: 0px 1px 5px rgba(108, 117, 139, 0.4);
border-radius: 4px;

& > div {
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  height: max-content;
  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
      align-self: center;
      align-items: center;
    }
  }
  & > svg {
    cursor: pointer;
  }
}

&::before {
  content: "";
  background: ${ props => props.theme.colorBeforeElement };
  width: 6px;
  height: 88px;
  position: relative;
  top: -15px;
  left: -23px;
}
`;