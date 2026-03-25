import styled from "styled-components/native";
import React from "react";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  style?: object;
  [key: string]: any;
}

const Container = styled(Div)`
  background-color: #ffffff;
  shadow-color: #000000;
  shadow-radius: 4px;
  shadow-opacity: 0.5;
`;

function Menu({ children, style, ...props }: Props) {
  return (
    <Container style={[{ shadowOffset: { height: 4 } }, style]} {...props}>
      {children}
    </Container>
  );
}

export default Menu;
