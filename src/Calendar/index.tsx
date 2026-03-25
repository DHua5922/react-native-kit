import CalendarParent from "./Calendar";
import CalendarDay from "./CalendarDay";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";
import CalendarLeft from "./CalendarLeft";
import CalendarRight from "./CalendarRight";
import CalendarTitle from "./CalendarTitle";
import CalendarWeekday from "./CalendarWeekday";
import CalendarWeekdays from "./CalendarWeekdays";

interface Calendar extends React.FC<any> {
  Day: typeof CalendarDay;
  Days: typeof CalendarDays;
  Header: typeof CalendarHeader;
  Left: typeof CalendarLeft;
  Right: typeof CalendarRight;
  Title: typeof CalendarTitle;
  Weekday: typeof CalendarWeekday;
  Weekdays: typeof CalendarWeekdays;
}

const Calendar = CalendarParent as unknown as Calendar;
Calendar.Day = CalendarDay;
Calendar.Days = CalendarDays;
Calendar.Header = CalendarHeader;
Calendar.Left = CalendarLeft;
Calendar.Right = CalendarRight;
Calendar.Title = CalendarTitle;
Calendar.Weekdays = CalendarWeekdays;
Calendar.Weekday = CalendarWeekday;

export default Calendar;
