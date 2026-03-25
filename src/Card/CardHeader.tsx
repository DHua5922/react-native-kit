import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import Div from "../Div";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  background-color: rgba(33, 37, 41, 0.03);
  padding: ${rem(0.5)}px ${rem(1)}px;
  margin-bottom: 0px;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.175);
`;

function CardHeader({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default CardHeader;
