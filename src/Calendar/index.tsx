import CalendarParent from "./Calendar";
import CalendarDay from "./CalendarDay";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";
import CalendarLeft from "./CalendarLeft";
import CalendarRight from "./CalendarRight";
import CalendarTitle from "./CalendarTitle";
import CalendarWeekday from "./CalendarWeekday";
import CalendarWeekdays from "./CalendarWeekdays";
import createCompoundComponent from "../internal/createCompoundComponent";

const Calendar = createCompoundComponent(CalendarParent, {
  Day: CalendarDay,
  Days: CalendarDays,
  Header: CalendarHeader,
  Left: CalendarLeft,
  Right: CalendarRight,
  Title: CalendarTitle,
  Weekday: CalendarWeekday,
  Weekdays: CalendarWeekdays,
});

export default Calendar;
