import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SearchInput from "../../src/Input/SearchInput";

describe("SearchInput", () => {
  it("calls change handlers for typing and clearing", () => {
    const onChange = jest.fn();
    const onChangeText = jest.fn();
    const screen = render(
      <SearchInput
        placeholder="Search"
        value="query"
        onChange={onChange}
        onChangeText={onChangeText}
      />
    );

    fireEvent.changeText(screen.getByPlaceholderText("Search"), "updated");

    expect(onChange).toHaveBeenCalledWith("updated");
    expect(onChangeText).toHaveBeenCalledWith("updated");

    fireEvent.press(screen.getByText("clear"));

    expect(onChange).toHaveBeenLastCalledWith("");
    expect(onChangeText).toHaveBeenLastCalledWith("");
  });
});
