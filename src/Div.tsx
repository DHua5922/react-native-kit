import Text from "./Text";
import React from "react";
import { View, Text as RnText } from "react-native";

interface Props {
  children?: React.ReactNode;
  type?: "success" | "danger" | "warning" | "info" | "default";
  [key: string]: any;
}

const BACKGROUND_COLORS = {
  success: "#d1e7dd",
  danger: "#f8d7da",
  warning: "#fff3cd",
  info: "#cff4fc",
  default: "#00000000",
} as const;

function isTextChild(child: React.ReactNode) {
  return (
    typeof child !== "object" ||
    (React.isValidElement(child) &&
      (child.type === Text || child.type === RnText))
  );
}

function mergeTextChild(child: React.ReactNode, props: Props) {
  if (!React.isValidElement(child)) return child;

  return React.cloneElement(child, {
    ...props,
    ...child.props,
  });
}

function renderTextGroup(
  textChildren: React.ReactNode[],
  props: Props,
  key: string,
) {
  if (textChildren.length === 0) return null;

  return (
    <Text key={key} {...props}>
      {textChildren.map((child, index) => (
        <React.Fragment key={`${key}-text-${index}`}>
          {mergeTextChild(child, props)}
        </React.Fragment>
      ))}
    </Text>
  );
}

function renderContainer(children: React.ReactNode, props: Props) {
  const chosenViewColor = BACKGROUND_COLORS[props.type || "default"];

  return (
    <View
      {...props}
      style={[
        { backgroundColor: chosenViewColor, borderColor: chosenViewColor },
        props.style,
      ]}
    >
      {children}
    </View>
  );
}

function Div({ children, ...props }: Props) {
  if (React.Children.count(children) === 0) {
    return renderContainer(null, props);
  }

  const outputChildren: React.ReactNode[] = [];
  const currentTextGroup: React.ReactNode[] = [];
  let isOnlyText = true;

  React.Children.forEach(children, (child, index) => {
    if (child == null || typeof child === "boolean") {
      outputChildren.push(<View key={`empty-${index}`} />);
      return;
    }

    if (isTextChild(child)) {
      currentTextGroup.push(child);
      return;
    }

    isOnlyText = false;
    outputChildren.push(
      renderTextGroup(currentTextGroup, props, `text-group-${index}`),
    );
    outputChildren.push(
      <React.Fragment key={`child-${index}`}>{child}</React.Fragment>,
    );
    currentTextGroup.length = 0;
  });

  outputChildren.push(
    renderTextGroup(currentTextGroup, props, "text-group-final"),
  );

  return isOnlyText ? (
    outputChildren
  ) : (
    renderContainer(outputChildren, props)
  );
}

export default Div;
