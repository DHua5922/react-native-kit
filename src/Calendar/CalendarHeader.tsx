import styled from "styled-components/native";
import Row from "../Row";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Row)`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

function CalendarHeader({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export default CalendarHeader;
