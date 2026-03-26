import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { rem } from "../utilities/responsive";
import Menu from "../Menu";
import TextInput from "./TextInput";
import Popup from "../Popup";
import styled from "styled-components/native";
import { callHandler } from "../internal/callbacks";
import { measurePopupPosition } from "../internal/popup";

interface Props {
  value: string;
  onChange?: (date: string) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  rightChildren?: React.ReactNode;
  [key: string]: any;
}

const CalendarIcon = styled(FontAwesome)`
  margin: 0px 8px;
`;

function DateInput({ children, rightChildren, ...props }: Props) {
  const ref = useRef<any>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarPos, setCalendarPos] = useState({
    top: "auto",
    left: "auto",
    width: "auto",
  });

  const parentChildren = React.Children.toArray(
    children
  )[0] as React.ReactElement;

  return (
    <Pressable ref={ref} disabled={props.disabled}>
      <TextInput
        {...props}
        rightChildren={
          <Pressable
            onPress={() => {
              setShowCalendar(true);
              measurePopupPosition(ref, setCalendarPos, {
                includeWidth: true,
              });
            }}
            disabled={props.disabled}
          >
            {rightChildren || (
              <CalendarIcon name="calendar" size={rem(1.25)} color="#000000" />
            )}
          </Pressable>
        }
      />

      <Popup
        {...calendarPos}
        visible={showCalendar}
        onShow={() => setShowCalendar(true)}
        onHide={() => setShowCalendar(false)}
      >
        <Menu>
          {React.cloneElement(parentChildren, {
            ...parentChildren.props,
            onChange: (value: any) => {
              callHandler(parentChildren.props.onChange, value);
              setShowCalendar(false);
            },
          })}
        </Menu>
      </Popup>
    </Pressable>
  );
}

export default DateInput;
