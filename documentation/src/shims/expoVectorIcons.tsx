import React from "react";
import { Text } from "react-native";

type IconProps = {
  children?: React.ReactNode;
  name?: string;
  size?: number;
  color?: string;
  style?: any;
  [key: string]: any;
};

function createIconComponent(displayName: string) {
  function Icon({
    children,
    name = "",
    size = 16,
    color = "currentColor",
    style,
    ...props
  }: IconProps) {
    return (
      <Text
        {...props}
        style={[
          {
            color,
            fontSize: size,
            lineHeight: size,
          },
          style,
        ]}
      >
        {children ?? name}
      </Text>
    );
  }

  Icon.displayName = displayName;

  return Icon;
}

export const AntDesign = createIconComponent("AntDesign");
export const Entypo = createIconComponent("Entypo");
export const Feather = createIconComponent("Feather");
export const FontAwesome = createIconComponent("FontAwesome");
export const FontAwesome5 = createIconComponent("FontAwesome5");
export const MaterialIcons = createIconComponent("MaterialIcons");
export const MaterialCommunityIcons = createIconComponent(
  "MaterialCommunityIcons",
);
