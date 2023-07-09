import React from "react";
import { Button } from "./Button";
import styled from "styled-components";

// const StyledButton = styled(Button)`
//   background-color: var(--slate-dark-6);
//   border-color: var(--slate-dark-8);
//   color: white;
// `;

const StyledButton = styled(Button)`
  background-color: #4472c4;
  color: white;
`;

//bg-[#4472c4] hover:bg-[#3b62a8]
export function GrayBorderButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
