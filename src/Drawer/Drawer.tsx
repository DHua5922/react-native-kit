import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import DrawerContext from "./DrawerContext";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  show: boolean;
  onHide: () => void;
  style?: object;
  width?: string | number;
  [key: string]: any;
}

const ContainerParent = styled(Div)`
  background-color: #00000080;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  overflow: hidden;
  top: 0px;
  left: 0px;
`;
const ContainerContent = styled(Animated.View)`
  flex: 1;
  padding: 8px;
  background-color: #ffffff;
`;
const Container = Object.assign(ContainerParent, {
  Content: ContainerContent,
});

function Drawer({ children, show, onHide, style, width, ...props }: Props) {
  const drawerWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (show) {
      Animated.timing(drawerWidth, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(drawerWidth, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start(() => {
        onHide();
      });
    }
  }, [show]);

  return (
    <DrawerContext.Provider value={{ show, onHide }}>
      {show && (
        <Container>
          <Container.Content
            style={[
              style,
              {
                width: drawerWidth.interpolate({
                  inputRange: [0, 1],
                  outputRange:
                    typeof width === "string"
                      ? ["0%", width || "25%"]
                      : [0, width || 500],
                }),
              },
            ]}
            {...props}
          >
            {children}
          </Container.Content>
        </Container>
      )}
    </DrawerContext.Provider>
  );
}

export default Drawer;
