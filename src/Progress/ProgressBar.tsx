import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import Center from "../Center";
import ProgressText from "./ProgressText";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  progress: number;
  duration?: number;
  color: string;
  [key: string]: any;
}

interface ContainerProps {
  color: string;
}

const ContainerParent = styled(Div)<ContainerProps>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  border-color: ${(props: ContainerProps) => props.color};
  border-width: 1px;
  overflow: hidden;
`;
const ContainerProgress = styled(Animated.View)<ContainerProps>`
  height: 100%;
  background-color: ${(props: ContainerProps) => props.color};
`;
const Container = Object.assign(ContainerParent, {
  Progress: ContainerProgress,
});

const SCenter = styled(Center)`
  margin-top: 12px;
`;

function ProgressBar({
  children,
  progress,
  duration = 300,
  color = "",
  ...props
}: Props) {
  const [widthAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [progress, duration, widthAnim]);

  const animatedStyle = {
    width: widthAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
  };

  return (
    <>
      <Container color={color} {...props}>
        <Container.Progress color={color} style={[animatedStyle]} />
      </Container>
      {children && (
        <SCenter>
          <ProgressText color={color}>{children}</ProgressText>
        </SCenter>
      )}
    </>
  );
}

export default ProgressBar;
