import styled from "styled-components/native";
import Center from "../Center";
import { Pressable } from "react-native";
import React, { useContext } from "react";
import CalendarContext from "./CalendarContext";
import Div from "../Div";
import { format, isSameMonth } from "date-fns";

interface Props {
  children?: React.ReactNode;
  value: Date;
  onPress?: (value: Date) => void;
  textStyle?: object | any[];
  [key: string]: any;
}

interface DayNumberProps {
  backgroundColor: string;
}

interface DayValueProps {
  color: string;
  opacity: number;
}

const DayContainer = styled(Center)`
  width: 14.28%;
`;
const DayNumber = styled(Pressable)<DayNumberProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: DayNumberProps) => props.backgroundColor};
  padding: 8px;
`;
const DayValue = styled(Div)<DayValueProps>`
  color: ${(props: DayValueProps) => props.color};
  opacity: ${(props: DayValueProps) => props.opacity};
`;
const Day = Object.assign(DayContainer, { Number: DayNumber, Value: DayValue });

function CalendarDay({ children, value, onPress, textStyle, ...props }: Props) {
  const {
    currentMonth,
    value: chosenDate,
    onChange,
  } = useContext(CalendarContext);

  const isChosen =
    chosenDate &&
    chosenDate.getFullYear() === value.getFullYear() &&
    chosenDate.getMonth() === value.getMonth() &&
    chosenDate.getDate() === value.getDate();

  const isInCurrentMonth = isSameMonth(value, currentMonth);

  return (
    <Day>
      <Day.Number
        backgroundColor={
          isInCurrentMonth && isChosen ? "#0d6efd" : "transparent"
        }
        onPress={() => {
          if (isInCurrentMonth) {
            onChange(value);
            onPress && onPress(value);
          }
        }}
        {...props}
      >
        <Day.Value
          color={isChosen && isInCurrentMonth ? "#ffffff" : "#000000"}
          opacity={isInCurrentMonth ? 1 : 0.25}
          style={textStyle}
        >
          {children || format(value, "d")}
        </Day.Value>
      </Day.Number>
    </Day>
  );
}

export default CalendarDay;
