import React, { useContext, useEffect, useRef, useState } from "react";
import { Animated, ScrollView } from "react-native";
import styled from "styled-components/native";
import AccordionContext from "./AccordionContext";
import AccordionItemContext from "./AccordionItemContext";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  style?: object | any[];
  [key: string]: any;
}

const Content = styled(Div)`
  padding: 10px;
`;

function AccordionBody({ children, style, ...props }: Props) {
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;
  const { activeKeys } = useContext(AccordionContext);
  const eventKey = useContext(AccordionItemContext);

  useEffect(
    () =>
      Animated.timing(animation, {
        toValue: activeKeys.find((key: string) => key === eventKey)
          ? contentHeight
          : 0,
        duration: 300,
        useNativeDriver: false,
      }).start(),
    [activeKeys, contentHeight]
  );

  const interpolatedHeight = animation.interpolate({
    inputRange: [0, contentHeight],
    outputRange: [0, contentHeight],
  });

  return (
    <Animated.View
      style={{
        height: interpolatedHeight,
      }}
      {...props}
    >
      <ScrollView>
        <Content
          onLayout={(event: {
            nativeEvent: { layout: { height: React.SetStateAction<number> } };
          }) => setContentHeight(event.nativeEvent.layout.height)}
          style={style}
        >
          {children}
        </Content>
      </ScrollView>
    </Animated.View>
  );
}

export default AccordionBody;
