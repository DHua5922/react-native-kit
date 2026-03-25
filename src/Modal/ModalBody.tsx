import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import Div from "../Div";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  padding: ${rem(1)}px;
  width: 100%;
`;

function ModalBody({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default ModalBody;
