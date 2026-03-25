import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

interface Props {
  children?: React.ReactNode;
  config: object;
  style?: object;
  [key: string]: any;
}

function FadeInAnimation({ children, config = {}, style, ...props }: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      ...config,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View {...props} style={[style, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
}

export default FadeInAnimation;
