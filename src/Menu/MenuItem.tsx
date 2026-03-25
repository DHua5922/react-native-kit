import styled from "styled-components/native";
import Div from "../Div";
import React from "react";
import { Pressable } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: object | any[];
  [key: string]: any;
}

const SDiv = styled(Div)`
  padding: 8px;
`;

function MenuItem({ children, style, ...props }: Props) {
  return (
    <Pressable {...props}>
      <SDiv style={style}>{children}</SDiv>
    </Pressable>
  );
}

export default MenuItem;
