import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import Text from "../Text";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Text)`
  font-size: ${rem(1.5)}px;
`;

function ModalTitle({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default ModalTitle;
