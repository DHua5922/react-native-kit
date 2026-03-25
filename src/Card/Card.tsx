import styled from "styled-components/native";
import Div from "../Div";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  background-color: #ffffff;
  box-shadow: 0px 0px 3px grey;
`;

function Card({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default Card;
