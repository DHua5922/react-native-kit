import React from "react";
import { Linking, Pressable } from "react-native";
import Div from "./Div";

interface Props {
  children?: React.ReactNode;
  link: string;
  [key: string]: any;
}

function Link({ children, link = "", ...props }: Props) {
  return (
    <Pressable onPress={() => Linking.openURL(link)}>
      <Div underline {...props}>
        {children}
      </Div>
    </Pressable>
  );
}

export default Link;
