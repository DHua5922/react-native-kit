import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { rem } from "../utilities/responsive";
import TextInput from "./TextInput";
import Popup from "../Popup";
import Menu from "../Menu";
import { callHandler } from "../internal/callbacks";
import { measurePopupPosition } from "../internal/popup";

interface Props {
  children?: React.ReactNode;
  onChange?: (text: string) => void;
  onChangeText?: (text: string) => void;
  [key: string]: any;
}

const iconProps = {
  size: rem(1.25),
  color: "#000000",
};

function SelectInput({ children, onChange, onChangeText, ...props }: Props) {
  const DropdownButton = useRef<any>(null);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [dropdownMenuPos, setDropdownMenuPos] = useState({
    top: "auto",
    left: "auto",
    width: "auto",
  });

  return (
    <Pressable
      ref={DropdownButton}
      onPress={() => {
        setShowDropdownMenu(true);
        measurePopupPosition(DropdownButton, setDropdownMenuPos, {
          includeWidth: true,
        });
      }}
      disabled={props.disabled}
    >
      <TextInput
        rightChildren={
          <Entypo
            name={`chevron-${showDropdownMenu ? "up" : "down"}`}
            {...iconProps}
          />
        }
        {...props}
        onChangeText={(text: string) => {
          callHandler(onChange, text);
          callHandler(onChangeText, text);
        }}
      />

      <Popup
        {...dropdownMenuPos}
        visible={showDropdownMenu}
        onShow={() => setShowDropdownMenu(true)}
        onHide={() => setShowDropdownMenu(false)}
      >
        <Menu>
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement<any>, {
              ...(child as React.ReactElement<any>).props,
              onPress: (event: any) => {
                callHandler(
                  (child as React.ReactElement<any>).props.onPress,
                  event
                );
                setShowDropdownMenu(false);
              },
            })
          )}
        </Menu>
      </Popup>
    </Pressable>
  );
}

export default SelectInput;
