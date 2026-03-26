import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import Button from "../../src/Button";
import Menu from "../../src/Menu";

describe("Menu", () => {
  it("shows menu content when the toggle is pressed", () => {
    const onPress = jest.fn();
    const screen = render(
      <Menu>
        <Menu.Toggle>
          <Button>Dropdown Button</Button>
        </Menu.Toggle>
        <Menu.Content>
          <Menu.Item onPress={onPress}>Action</Menu.Item>
          <Menu.Item>Another action</Menu.Item>
        </Menu.Content>
      </Menu>
    );

    expect(screen.queryByText("Action")).toBeNull();

    fireEvent.press(screen.UNSAFE_getByProps({ accessibilityRole: "button" }));

    expect(screen.getByText("Action")).toBeTruthy();
    expect(screen.getByText("Another action")).toBeTruthy();

    fireEvent.press(screen.getByText("Action"));

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Action")).toBeNull();
  });

  it("shows menu content when the toggle receives text children", () => {
    const screen = render(
      <Menu>
        <Menu.Toggle>
          <Text>Dropdown Button</Text>
        </Menu.Toggle>
        <Menu.Content>
          <Menu.Item>Action</Menu.Item>
        </Menu.Content>
      </Menu>
    );

    expect(screen.queryByText("Action")).toBeNull();

    fireEvent.press(screen.UNSAFE_getByProps({ accessibilityRole: "button" }));

    expect(screen.getByText("Action")).toBeTruthy();
  });
});
