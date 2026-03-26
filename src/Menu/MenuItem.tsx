import styled from "styled-components/native";
import Div from "../Div";
import React from "react";
import { Pressable, PressableProps } from "react-native";

interface CustomProps {
  style?: CSSStyleDeclaration;
}

type Props = CustomProps & PressableProps;

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
