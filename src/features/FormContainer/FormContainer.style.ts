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

& #card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 64px 40px;
  width: 480px;
  height: 700px;
  background: #FFFFFF;
  box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  & #chad-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 2px;
    margin: 0px auto;
    /* position: absolute;
    width: 96.97px;
    height: 32px;
    left: 0px;
    top: 0px; */
  }
}

`