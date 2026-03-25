import styled from "styled-components/native";
import { rem } from "react-native-kit";
import DocumentationTitle from "./DocumentationTitle";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(DocumentationTitle)`
  font-size: ${rem(1.5)}px;
`;

function DocumentationSectionTitle({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default DocumentationSectionTitle;
