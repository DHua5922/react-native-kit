import { format } from "date-fns";
import Div from "../Div";
import CalendarContext from "./CalendarContext";
import React, { useState } from "react";

interface Props {
  children?: React.ReactNode;
  value: Date;
  onChange: (date: Date) => void;
  [key: string]: any;
}

function Calendar({ children, value, onChange, ...props }: Props) {
  const [currentMonth, setCurrentMonth] = useState(value);

  return (
    <CalendarContext.Provider
      value={{
        value,
        onChange,
        currentMonth,
        setCurrentMonth,
      }}
    >
      <Div key={format(currentMonth, "yyyy-MM")} {...props}>
        {children}
      </Div>
    </CalendarContext.Provider>
  );
}

export default Calendar;
