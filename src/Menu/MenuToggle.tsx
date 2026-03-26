import React, { useContext, useRef } from "react";
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  View,
} from "react-native";
import { callHandler } from "../internal/callbacks";
import { measurePopupPosition } from "../internal/popup";
import Text from "../Text";
import MenuContext from "./MenuContext";

interface Props extends Omit<PressableProps, "children"> {
  children?: React.ReactNode;
}

function MenuToggle({ children, onPress, ...props }: Props) {
  const context = useContext(MenuContext);
  const triggerRef = useRef<View>(null);

  if (!context) {
    return null;
  }

  const handlePress: NonNullable<PressableProps["onPress"]> = (event) => {
    callHandler(onPress || undefined, event);
    callHandler(context.onShowMenu);
    measurePopupPosition(triggerRef, context.setMenuPos, {
      offsetTop: context.offsetMenuPosVertical,
      offsetLeft: context.offsetMenuPosHorizontal,
    });
  };

  const triggerProps: PressableProps = {
    ...props,
    accessibilityRole: props.accessibilityRole || "button",
    onPress: handlePress,
  };

  if (React.isValidElement(children)) {
    const child = children as React.ReactElement<PressableProps>;
    const childProps = child.props;

    return (
      <View ref={triggerRef} collapsable={false}>
        {React.cloneElement(child, {
          ...triggerProps,
          ...childProps,
          accessibilityRole:
            childProps.accessibilityRole || triggerProps.accessibilityRole,
          onPress: (event: GestureResponderEvent) => {
            callHandler(childProps.onPress || undefined, event);
            callHandler(triggerProps.onPress || undefined, event);
          },
        })}
      </View>
    );
  }

  return (
    <View ref={triggerRef} collapsable={false}>
      <Pressable {...triggerProps}>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
}

export default MenuToggle;
