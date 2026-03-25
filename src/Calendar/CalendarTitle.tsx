import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import { format } from "date-fns";
import React, { useContext } from "react";
import CalendarContext from "./CalendarContext";
import Text from "../Text";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Text)`
  font-size: ${rem(1.5)}px;
  font-weight: bold;
  margin: 0 16px;
`;

function CalendarTitle({ children, ...props }: Props) {
  const { currentMonth } = useContext(CalendarContext);
  return (
    <Container {...props}>
      {children || format(currentMonth, "MMMM yyyy")}
    </Container>
  );
}

export default CalendarTitle;
