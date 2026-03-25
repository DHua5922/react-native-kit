import { Calendar } from "react-native-kit";
import React, { useState } from "react";
import Page from "../../functional/Page";
import Documentation from "../../functional/Documentation";
import { packageName, pageNames } from "../../../constants";
import Code from "../../functional/Code";
import Link from "../../functional/Link";
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  getDay,
  isSameMonth,
  startOfMonth,
  subDays,
  subMonths,
} from "date-fns";

const basicCalendarCode = `function Example() {
  const [chosenDate, setChosenDate] = useState(new Date());

  return (
    <Calendar value={chosenDate} onChange={(date) => setChosenDate(date)}>
      <Calendar.Header>
        <Calendar.Left />

        <Calendar.Title />

        <Calendar.Right />
      </Calendar.Header>

      <Calendar.Weekdays />

      <Calendar.Days />
    </Calendar>
  );
}`;

const customCalendarCode = `
  function Example() {
    const [chosenDate, setChosenDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getDatesInMonth() {
      const firstDay = startOfMonth(currentMonth);
      const lastDay = endOfMonth(firstDay);
      const allDaysInMonth = eachDayOfInterval({ start: firstDay, end: lastDay });

      // Determine the weekday index of the first day of the month (0 for Sunday, 1 for Monday, etc.)
      const firstDayIndex = getDay(firstDay);

      // Determine the weekday index of the last day of the month
      const lastDayIndex = getDay(lastDay);

      // Calculate the number of days to add before and after the current month to complete the week
      const daysBefore = new Array(firstDayIndex).fill(null).map((_, index) =>
        subDays(firstDay, firstDayIndex - index)
      );
      const daysAfter = new Array(6 - lastDayIndex).fill(null).map((_, index) =>
        addDays(lastDay, index + 1)
      );

      // Concatenate the arrays with days before, days of the month, and days after
      return daysBefore.concat(allDaysInMonth, daysAfter);
    }

    return (
      <Calendar value={chosenDate} onChange={(date) => setChosenDate(date)}>
        <Calendar.Header>
          <Calendar.Left
            onPress={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            {"<"}
          </Calendar.Left>

          <Calendar.Title>
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Calendar.Title>

          <Calendar.Right
            onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            {">"}
          </Calendar.Right>
        </Calendar.Header>

        <Calendar.Weekdays>
          {weekdays.map((weekday) => (
            <Calendar.Weekday key={weekday}>
              {weekday}
            </Calendar.Weekday>
          ))}
        </Calendar.Weekdays>

        <Calendar.Days>
          {getDatesInMonth().map((date) => {
            const isChosen = chosenDate &&
              chosenDate.getFullYear() === date.getFullYear() &&
              chosenDate.getMonth() === date.getMonth() &&
              chosenDate.getDate() === date.getDate();

            return (
              <Calendar.Day
                value={date}
                onPress={(date) => setChosenDate(date)}
                key={date}
                style={{ backgroundColor: isSameMonth(date, currentMonth) && isChosen ? "lightblue" : "transparent" }}
                textStyle={{ color: "#000000" }}
              >
                {date.getDate()}
              </Calendar.Day>
            );
          })}
        </Calendar.Days>
      </Calendar>
    );
  }
`;

function CalendarPage() {
  return (
    <Page.Documentation>
      <Documentation.Section title={pageNames.Calendar} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Calendar } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Basic Calendar Example">
        <Code.Editor
          scope={{
            Calendar,
            useState,
          }}
        >
          {basicCalendarCode}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.Section subtitle="Custom Calendar Example">
        <Code.Editor
          scope={{
            Calendar,
            useState,
            startOfMonth,
            endOfMonth,
            eachDayOfInterval,
            subMonths,
            addMonths,
            getDay,
            subDays,
            addDays,
            isSameMonth,
          }}
        >
          {customCalendarCode}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["value", "Date", "", "Chosen date."],
          [
            "onChange",
            <Code.Sample>{`(date: Date) => void`}</Code.Sample>,
            "",
            "Callback fired when selecting date.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CalendarPage;
