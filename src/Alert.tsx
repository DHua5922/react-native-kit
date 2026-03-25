import styled from "styled-components/native";
import { rem } from "./utilities/responsive";
import Row from "./Row";
import React from "react";
import Div from "./Div";
import Button from "./Button";

interface Props {
  children?: React.ReactNode;
  type?: "success" | "danger" | "warning" | "info" | "default";
  dismissible?: boolean;
  onClose?: () => void;
  CloseButton?: React.ReactNode;
  [key: string]: any;
}

const SRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: ${rem(1)}px;
  border-width: 1px;
  box-shadow: 0px 0px 3px grey;
  border-radius: ${rem(0.375)}px;
`;

function Alert({
  children,
  dismissible,
  onClose,
  CloseButton,
  ...props
}: Props) {
  return (
    <SRow {...props}>
      <Div type={props.type}>{children}</Div>
      {dismissible && (CloseButton || <Button.Close onPress={onClose} />)}
    </SRow>
  );
}

export default Alert;
