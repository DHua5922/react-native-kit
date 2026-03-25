import React, { useEffect, useState } from "react";
import { Animated, Pressable } from "react-native";
import styled from "styled-components/native";
import Div from "../Div";
import Row from "../Row";

interface Props {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  onPress?: (evt: any) => void;
  size?: number;
  [key: string]: any;
}

interface ContainerProps {
  checked: boolean;
  size: number;
}

const blue = "#2089dc";
const white = "#FFFFFF";

const Container = styled(Div)<ContainerProps>`
  width: ${(props: ContainerProps) => props.size + 22}px;
  height: ${(props: ContainerProps) => props.size + 2}px;
  border-radius: 15px;
  border-width: 1px;
  border-color: #808080;
  background-color: ${(props: ContainerProps) =>
    props.checked ? blue : white};
  justify-content: center;
  margin-right: 8px;
`;
const SRow = styled(Row)`
  align-items: center;
`;

const Slider = styled(Animated.View)<ContainerProps>`
  width: ${(props: ContainerProps) => props.size}px;
  height: ${(props: ContainerProps) => props.size}px;
  border-radius: 100%;
  background-color: ${(props: ContainerProps) =>
    props.checked ? white : blue};
`;

function Switch({
  checked = false,
  onChange,
  children,
  onPress,
  size = 18,
  ...props
}: Props) {
  const [sliderAnimation] = useState(new Animated.Value(checked ? 1 : 0));

  useEffect(() => {
    Animated.timing(sliderAnimation, {
      toValue: checked ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [checked]);

  return (
    <Pressable
      onPress={(evt: any) => {
        onPress && onPress(evt);
        onChange && onChange(!checked);
      }}
      onPressIn={() => {}}
      onPressOut={() => {}}
      {...props}
    >
      <SRow>
        <Container checked={checked} size={size}>
          <Slider
            checked={checked}
            style={{
              transform: [
                {
                  translateX: sliderAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 20],
                  }),
                },
              ],
            }}
            size={size}
          />
        </Container>
        {children}
      </SRow>
    </Pressable>
  );
}

export default Switch;
