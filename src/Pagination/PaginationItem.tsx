import styled from "rn-css";
import { rem } from "../utilities/responsive";
import { Pressable } from "react-native";
import Row from "../Row";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Pressable)`
  padding: ${rem(0.5)}px ${rem(0.75)}px;
  border-color: #dee2e6;
  border-width: 1px;
  margin: 0px ${rem(0.25)}px;
`;

function PaginationItem({ children, ...props }: Props) {
  return (
    <Container {...props}>
      <Row>{children}</Row>
    </Container>
  );
}

export default PaginationItem;
