import { Modal as RNModal } from "react-native";
import styled from "styled-components/native";
import ModalContext from "./ModalContext";
import { useResponsiveUnits } from "../utilities/responsive";
import React from "react";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  style?: object | any[];
  onRequestClose: () => void;
  visible: boolean;
  [key: string]: any;
}

interface ContainerContentProps {
  maxWidth: string;
}

const ContainerParent = styled(Div)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`;
const ContainerContent = styled(Div)<ContainerContentProps>`
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  max-width: ${(props: ContainerContentProps) => props.maxWidth};
  width: 100%;
`;
const Container = Object.assign(ContainerParent, {
  Content: ContainerContent,
});

function Modal({ children, style, onRequestClose, visible, ...props }: Props) {
  const { vw } = useResponsiveUnits();
  return (
    <ModalContext.Provider value={{ visible, onRequestClose }}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
        {...props}
      >
        <Container>
          <Container.Content maxWidth={`${vw(50)}px`} style={style}>
            {children}
          </Container.Content>
        </Container>
      </RNModal>
    </ModalContext.Provider>
  );
}

export default Modal;
