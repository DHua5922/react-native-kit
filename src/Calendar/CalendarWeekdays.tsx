import Row from "../Row";
import React from "react";
import CalendarWeekday from "./CalendarWeekday";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarWeekdays({ children, ...props }: Props) {
  return (
    <Row {...props}>
      {children ||
        weekdays.map((weekday) => (
          <CalendarWeekday key={weekday}>{weekday}</CalendarWeekday>
        ))}
    </Row>
  );
}

export default CalendarWeekdays;
