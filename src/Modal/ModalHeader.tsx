import Row from "../Row";
import styled from "styled-components/native";
import React, { useContext } from "react";
import ModalContext from "./ModalContext";
import { rem } from "../utilities/responsive";
import Button from "../Button";

interface Props {
  children?: React.ReactNode;
  closeButton?: boolean;
  [key: string]: any;
}

const SRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dee2e6;
  align-items: center;
  padding: ${rem(0.75)}px;
`;

const CloseButton = styled(Button.Close)`
  font-size: ${rem(1.5)}px;
`;

function ModalHeader({ children, closeButton, ...props }: Props) {
  const { onRequestClose } = useContext(ModalContext);

  return (
    <SRow {...props}>
      {children}
      {closeButton && <CloseButton onPress={onRequestClose} />}
    </SRow>
  );
}

export default ModalHeader;
