import React, { useContext } from "react";
import CalendarContext from "./CalendarContext";
import { Pressable } from "react-native";
import Div from "../Div";
import { addMonths } from "date-fns";

interface Props {
  children?: React.ReactNode;
  onPress?: (date: Date) => void;
  [key: string]: any;
}

function CalendarRight({ children, onPress, ...props }: Props) {
  const { currentMonth, setCurrentMonth } = useContext(CalendarContext);

  return (
    <Pressable
      onPress={() => {
        const newMonth = addMonths(currentMonth, 1);
        setCurrentMonth(newMonth);
        onPress && onPress(newMonth);
      }}
      {...props}
    >
      {children || <Div>▶</Div>}
    </Pressable>
  );
}

export default CalendarRight;
