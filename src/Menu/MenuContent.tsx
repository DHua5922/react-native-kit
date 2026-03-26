import styled from "styled-components/native";
import React, { useContext } from "react";
import Div from "../Div";
import Popup from "../Popup";
import MenuContext from "./MenuContext";
import { callHandler } from "../internal/callbacks";

interface Props {
  children?: React.ReactNode;
  style?: object;
  [key: string]: any;
}

const Container = styled(Div)`
  background-color: #ffffff;
  shadow-color: #000000;
  shadow-radius: 4px;
  shadow-opacity: 0.5;
`;

function renderItems(
  children: React.ReactNode,
  onHideMenu?: () => void
) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const element = child as React.ReactElement<any>;

    return React.cloneElement(element, {
      ...element.props,
      onPress: (event: any) => {
        callHandler(element.props.onPress, event);
        callHandler(onHideMenu);
      },
    });
  });
}

function MenuContent({ children, style, ...props }: Props) {
  const context = useContext(MenuContext);

  if (!context) {
    return (
      <Container style={[{ shadowOffset: { height: 4 } }, style]} {...props}>
        {children}
      </Container>
    );
  }

  return (
    <Popup
      {...context.menuPos}
      visible={context.showMenu}
      onShow={context.onShowMenu}
      onHide={context.onHideMenu}
    >
      <Container
        style={[{ shadowOffset: { height: 4 } }, style]}
        {...props}
      >
        {renderItems(children, context.onHideMenu)}
      </Container>
    </Popup>
  );
}

export default MenuContent;
