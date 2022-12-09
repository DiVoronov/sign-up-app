import React from "react";
import styled from "styled-components";

export const StyledSharedContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 64px 40px;
width: 480px;
min-height: 511px;
/* height: ${ props => props.theme.height }; */
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
border-radius: 8px;
flex: none;
order: 0;
flex-grow: 0;
`