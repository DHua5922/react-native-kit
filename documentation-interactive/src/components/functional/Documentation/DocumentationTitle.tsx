import { Div, rem } from "react-native-kit";
import styled from "styled-components/native";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  font-size: ${rem(3)}px;
  font-weight: bold;
  margin: ${rem(1)}px 0;
`;

function DocumentationTitle({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default DocumentationTitle;
