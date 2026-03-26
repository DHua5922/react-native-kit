import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import TextInput from "../../src/Input/TextInput";

describe("TextInput", () => {
  it("forwards focus, blur, and change handlers when enabled", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const onChangeText = jest.fn();
    const screen = render(
      <TextInput
        placeholder="Name"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
      />
    );

    const input = screen.getByPlaceholderText("Name");

    fireEvent(input, "focus", { nativeEvent: {} });
    fireEvent.changeText(input, "Dylan");
    fireEvent(input, "blur", { nativeEvent: {} });

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("Dylan");
    expect(onChangeText).toHaveBeenCalledWith("Dylan");
  });

  it("does not call handlers when disabled", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onChange = jest.fn();
    const onChangeText = jest.fn();
    const screen = render(
      <TextInput
        placeholder="Disabled"
        disabled
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
      />
    );

    const input = screen.getByPlaceholderText("Disabled");

    fireEvent(input, "focus", { nativeEvent: {} });
    fireEvent.changeText(input, "Ignored");
    fireEvent(input, "blur", { nativeEvent: {} });

    expect(onFocus).not.toHaveBeenCalled();
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
    expect(onChangeText).not.toHaveBeenCalled();
  });
});
