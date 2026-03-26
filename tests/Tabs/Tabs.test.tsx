import { fireEvent, render } from "@testing-library/react-native";
import Tab from "../../src/Tab";
import Tabs from "../../src/Tabs";

describe("Tabs", () => {
  it("renders only the active tab content and switches on rerender", () => {
    const onSelect = jest.fn();
    const onTabPress = jest.fn();
    const screen = render(
      <Tabs activeKey="account" onSelect={onSelect}>
        <Tab eventKey="account" title="Account" onPress={onTabPress}>
          Account Panel
        </Tab>
        <Tab eventKey="security" title="Security">
          Security Panel
        </Tab>
      </Tabs>,
    );

    expect(screen.getByText("Account Panel")).toBeTruthy();
    expect(screen.queryByText("Security Panel")).toBeNull();

    fireEvent.press(screen.getByText("Security"));

    expect(onSelect).toHaveBeenCalledWith("security");

    screen.rerender(
      <Tabs activeKey="security" onSelect={onSelect}>
        <Tab eventKey="account" title="Account" onPress={onTabPress}>
          Account Panel
        </Tab>
        <Tab eventKey="security" title="Security">
          Security Panel
        </Tab>
      </Tabs>,
    );

    expect(screen.queryByText("Account Panel")).toBeNull();
    expect(screen.getByText("Security Panel")).toBeTruthy();

    fireEvent.press(screen.getByText("Account"));

    expect(onSelect).toHaveBeenCalledWith("account");
    expect(onTabPress).toHaveBeenCalledTimes(1);
  });
});
