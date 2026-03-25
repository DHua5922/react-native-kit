import Row from "../Row";
import CalendarContext from "./CalendarContext";
import React, { useContext } from "react";
import CalendarDay from "./CalendarDay";
import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  startOfMonth,
  subDays,
} from "date-fns";

interface Props {
  children?: React.ReactNode;
  style?: object;
  [key: string]: any;
}

function CalendarDays({ children, ...props }: Props) {
  const { currentMonth } = useContext(CalendarContext);

  function getDatesInMonth() {
    const firstDay = startOfMonth(currentMonth);
    const lastDay = endOfMonth(firstDay);
    const allDaysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay });

    // Determine the weekday index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
    const firstDayIndex = getDay(firstDay);

    // Determine the weekday index of the last day of the month
    const lastDayIndex = getDay(lastDay);

    // Calculate the number of days to add before and after the current month to complete the week
    const daysBefore = new Array(firstDayIndex)
      .fill(null)
      .map((_, index) => subDays(firstDay, firstDayIndex - index));
    const daysAfter = new Array(6 - lastDayIndex)
      .fill(null)
      .map((_, index) => addDays(lastDay, index + 1));

    // Concatenate the arrays with days before, days of the month, and days after
    return daysBefore.concat(allDaysInMonth, daysAfter);
  }

  return (
    <Row {...props}>
      {children ||
        getDatesInMonth().map((date, index: number) => (
          <CalendarDay key={index} value={date} />
        ))}
    </Row>
  );
}

export default CalendarDays;
