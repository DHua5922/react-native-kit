import React from "react";
import { Modal, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import Div from "./Div";

interface Props {
  left?: string;
  top?: string;
  width?: string;
  children?: React.ReactNode;
  visible?: boolean;
  onShow: () => void;
  onHide: () => void;
  [key: string]: any;
}

interface ContainerParentProps {
  left?: string;
  top?: string;
  width?: string;
}

const ContainerParent = styled(Div)<ContainerParentProps>`
  position: absolute;
  width: 100%;
  left: ${(props: ContainerParentProps) => props.left || "auto"};
  width: ${(props: ContainerParentProps) => props.width || "auto"};
  top: ${(props: ContainerParentProps) => props.top || "auto"};
`;
const ContainerOutside = styled(Div)`
  flex: 1;
`;
const Container = Object.assign(ContainerParent, {
  Outside: ContainerOutside,
});

function Popup({ children, visible, onShow, onHide, ...props }: Props) {
  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableWithoutFeedback onPress={onHide}>
        <Container.Outside>
          <TouchableWithoutFeedback onPress={onShow}>
            <Container {...props}>{children}</Container>
          </TouchableWithoutFeedback>
        </Container.Outside>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default Popup;
