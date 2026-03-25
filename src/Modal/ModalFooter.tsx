import styled from "styled-components/native";
import Row from "../Row";
import { rem } from "../utilities/responsive";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Row)`
  padding: ${rem(1)}px;
  justify-content: center;
  width: 100%;
  border-top-width: 1px;
  border-color: #dee2e6;
`;

function ModalFooter({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default ModalFooter;
