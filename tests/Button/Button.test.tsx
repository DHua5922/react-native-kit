import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Button from "../../src/Button";

describe("Button", () => {
  it("renders children and calls onPress", () => {
    const onPress = jest.fn();
    const screen = render(<Button onPress={onPress}>Press me</Button>);

    fireEvent.press(screen.getByText("Press me"));

    expect(screen.getByText("Press me")).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
