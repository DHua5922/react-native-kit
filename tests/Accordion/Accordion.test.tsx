import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Accordion from "../../src/Accordion";

describe("Accordion", () => {
  it("toggles the item icon when using internal state", () => {
    const screen = render(
      <Accordion>
        <Accordion.Item eventKey="first">
          <Accordion.Header>
            <Accordion.Title>Section 1</Accordion.Title>
            <Accordion.Toggle />
          </Accordion.Header>
          <Accordion.Body>Body</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText("down")).toBeTruthy();

    fireEvent.press(screen.getByText("Section 1"));

    expect(screen.getByText("up")).toBeTruthy();
  });

  it("calls onSelect with the pressed event key", () => {
    const onSelect = jest.fn();
    const screen = render(
      <Accordion onSelect={onSelect}>
        <Accordion.Item eventKey="second">
          <Accordion.Header>
            <Accordion.Title>Section 2</Accordion.Title>
            <Accordion.Toggle />
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>
    );

    fireEvent.press(screen.getByText("Section 2"));

    expect(onSelect).toHaveBeenCalledWith("second");
  });
});
