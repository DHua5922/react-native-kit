import React from "react";
import styled from "styled-components/native";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled.View`
  padding: 8px;
`;

function Gap({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default Gap;
