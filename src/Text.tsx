import React from "react";
import styled from "styled-components/native";
import { rem } from "./utilities/responsive";
import { Text as RnText } from "react-native";

interface Props {
  children?: React.ReactNode;
  type?: "default" | "success" | "danger" | "warning" | "info";
  underline?: boolean;
  bold?: boolean;
  style?: object;
  [key: string]: any;
}

interface TextProps {
  underline?: boolean;
  bold?: boolean;
}

const SText = styled(RnText)<TextProps>`
  font-size: ${rem(1)}px;
  text-decoration: ${(props: TextProps) =>
    props.underline ? "underline" : "none"};
  font-weight: ${(props: TextProps) => (props.bold ? "bold" : "normal")};
`;

function Text({ children, type, style, ...props }: Props) {
  const types = {
    success: "#0a3622",
    danger: "#58151c",
    warning: "#664d03",
    info: "#055160",
    default: "#000000", // black
  };

  return (
    <SText
      style={[
        {
          color: types[type || "default"],
        },
        style,
      ]}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              ...props,
              ...child.props,
              style: [style, child.props.style],
            })
          : child
      )}
    </SText>
  );
}

export default Text;
