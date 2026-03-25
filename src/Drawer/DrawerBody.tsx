import styled from "styled-components/native";
import Div from "../Div";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  padding: 8px;
  width: 100%;
`;

function DrawerBody({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default DrawerBody;
