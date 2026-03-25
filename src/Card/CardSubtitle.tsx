import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import Text from "../Text";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Text)`
  color: #212529bf;
  margin-bottom: ${rem(0.5)}px;
`;

function CardSubtitle({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default CardSubtitle;
