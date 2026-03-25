import styled from "styled-components/native";
import Div from "./Div";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  flex-direction: row;
  flex-wrap: wrap;
`;

function Row({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default Row;
