import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import Text from "../Text";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Text)`
  font-size: ${rem(1.25)}px;
  margin-bottom: ${rem(0.5)}px;
  font-weight: 500;
`;

function CardTitle({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default CardTitle;
