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
  size: number;
  color: string;
  [key: string]: any;
}

interface ContainerProps {
  checked: boolean;
  color: string;
  size: number;
}

interface ContainerCheckedProps {
  color: string;
  size: number;
}

const ContainerParent = styled(Div)<ContainerProps>`
  width: ${(props: ContainerProps) => `${props.size}px`};
  height: ${(props: ContainerProps) => `${props.size}px`};
  border-width: 2px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border-color: ${(props: ContainerProps) =>
    props.checked ? props.color : "#808080"};
`;
const ContainerChecked = styled(Animated.View)<ContainerCheckedProps>`
  width: ${(props: ContainerCheckedProps) => `${props.size}px`};
  height: ${(props: ContainerCheckedProps) => `${props.size}px`};
  border-radius: 100%;
  background-color: ${(props: ContainerCheckedProps) => props.color};
`;
const Container = Object.assign(ContainerParent, {
  Checked: ContainerChecked,
});

const SRow = styled(Row)`
  align-items: center;
`;

function Radio({
  checked = false,
  onChange,
  children,
  onPress,
  size = 24,
  color = "#2089dc",
  ...props
}: Props) {
  const [scaleAnimation] = useState(new Animated.Value(checked ? 1 : 0));

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: checked ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
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
          {checked && (
            <Container.Checked
              color={color}
              size={size - 4}
              style={{
                transform: [
                  {
                    scale: scaleAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.8],
                    }),
                  },
                ],
              }}
            />
          )}
        </Container>
        {children}
      </SRow>
    </Pressable>
  );
}

export default Radio;
