import { Feather } from "@expo/vector-icons";
import React from "react";
import { rem } from "../utilities/responsive";

interface Props {
  Icon?: any;
  [key: string]: any;
}

function DrawerToggle({ Icon, ...props }: Props) {
  const IconComponent = Icon || Feather;
  return (
    <IconComponent name="menu" color="#000000" size={rem(2.5)} {...props} />
  );
}

export default DrawerToggle;
