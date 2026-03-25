import styled from "styled-components/native";
import Div from "../Div";
import { rem } from "../utilities/responsive";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Div)`
  flex: 1;
  text-align: center;
  font-size: ${rem(1)}px;
  color: #757575;
`;

function CalendarWeekday({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default CalendarWeekday;
