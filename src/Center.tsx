import styled from "styled-components/native";
import Div from "./Div";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Center({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default Center;
