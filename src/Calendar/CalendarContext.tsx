import { createContext } from "react";

interface DefaultValue {
  value: Date;
  onChange: (date: Date) => void;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const CalendarContext = createContext({
  value: new Date(),
  onChange: () => {},
  currentMonth: new Date(),
  setCurrentMonth: () => {},
} as DefaultValue);

export default CalendarContext;
