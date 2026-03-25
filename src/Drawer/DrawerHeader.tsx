import Row from "../Row";
import styled from "styled-components/native";
import React, { useContext } from "react";
import DrawerContext from "./DrawerContext";
import { rem } from "../utilities/responsive";
import Button from "../Button";

interface Props {
  children?: React.ReactNode;
  closeButton?: boolean;
  [key: string]: any;
}

const SRow = styled(Row)`
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  padding: 8px;
`;

const CloseButton = styled(Button.Close)`
  font-size: ${rem(1.5)}px;
`;

function DrawerHeader({ children, closeButton, ...props }: Props) {
  const { onHide } = useContext(DrawerContext);

  return (
    <SRow {...props}>
      {children}
      {closeButton && <CloseButton onPress={onHide}>x</CloseButton>}
    </SRow>
  );
}

export default DrawerHeader;
