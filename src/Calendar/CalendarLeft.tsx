import React, { useContext } from "react";
import CalendarContext from "./CalendarContext";
import { Pressable } from "react-native";
import Div from "../Div";
import { subMonths } from "date-fns";

interface Props {
  children?: React.ReactNode;
  onPress?: (date: Date) => void;
  [key: string]: any;
}

function CalendarLeft({ children, onPress, ...props }: Props) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext);

  return (
    <Pressable
      onPress={() => {
        const newMonth = subMonths(currentMonth, 1);
        setCurrentMonth(newMonth);
        onPress && onPress(newMonth);
      }}
      {...props}
    >
      {children || <Div>◀</Div>}
    </Pressable>
  );
}

export default CalendarLeft;
