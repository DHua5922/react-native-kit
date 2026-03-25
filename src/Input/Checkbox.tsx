import React, { useState, useEffect } from "react";
import { Animated, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import Div from "../Div";
import Row from "../Row";

interface Props {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  onPress?: (evt: any) => void;
  size: number;
  Check?: any;
  color: string;
  [key: string]: any;
}

interface ContainerProps {
  checked: boolean;
  color: string;
  size: number;
}

const Container = styled(Div)<ContainerProps>`
  width: ${(props: ContainerProps) => props.size}px;
  height: ${(props: ContainerProps) => props.size}px;
  border-radius: 0px;
  border-width: 2px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  border-color: ${(props: ContainerProps) =>
    props.checked ? props.color : "#808080"};
`;

const SRow = styled(Row)`
  align-items: center;
`;

function Checkbox({
  checked = false,
  onChange,
  children,
  onPress,
  size = 24,
  Checkmark,
  color = "#2089dc",
  ...props
}: Props) {
  const [opacityAnimation] = useState(new Animated.Value(checked ? 1 : 0));

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: checked ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [checked]);

  return (
    <Pressable
      onPress={(evt: any) => {
        onPress && onPress(evt);
        onChange && onChange(!checked);
      }}
      {...props}
    >
      <SRow>
        <Container checked={checked} color={color} size={size}>
          <Animated.View
            style={{
              opacity: opacityAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}
          >
            {checked &&
              (Checkmark || (
                <FontAwesome name="check" size={size * 0.9} color={color} />
              ))}
          </Animated.View>
        </Container>
        {children}
      </SRow>
    </Pressable>
  );
}

export default Checkbox;
