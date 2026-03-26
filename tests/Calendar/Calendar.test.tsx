import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Calendar from "../../src/Calendar";

describe("Calendar", () => {
  it("updates the title when navigating months", () => {
    const screen = render(
      <Calendar value={new Date(2026, 2, 15)} onChange={jest.fn()}>
        <Calendar.Header>
          <Calendar.Left />
          <Calendar.Title />
          <Calendar.Right />
        </Calendar.Header>
      </Calendar>
    );

    expect(screen.getByText("March 2026")).toBeTruthy();

    fireEvent.press(screen.getByText("▶"));

    expect(screen.getByText("April 2026")).toBeTruthy();

    fireEvent.press(screen.getByText("◀"));

    expect(screen.getByText("March 2026")).toBeTruthy();
  });

  it("only triggers onChange for days in the current month", () => {
    const onChange = jest.fn();
    const screen = render(
      <Calendar value={new Date(2026, 2, 15)} onChange={onChange}>
        <Calendar.Day value={new Date(2026, 2, 15)}>Current day</Calendar.Day>
        <Calendar.Day value={new Date(2026, 1, 28)}>Outside day</Calendar.Day>
      </Calendar>
    );

    fireEvent.press(screen.getByText("Current day"));

    expect(onChange).toHaveBeenCalledWith(new Date(2026, 2, 15));

    fireEvent.press(screen.getByText("Outside day"));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
