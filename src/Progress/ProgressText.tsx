import styled from "styled-components/native";
import Text from "../Text";
import { rem } from "../utilities/responsive";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Text)`
  font-size: ${rem(1.5)}px;
`;

function ProgressText({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default ProgressText;
