import React from "react";
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { rem } from "../utilities/responsive";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  style?: object;
  type?: string;
  fullWidth?: boolean;
  [key: string]: any;
}

const Container = styled(Div)<Props>`
  padding: ${rem(0.375)}px ${rem(0.75)}px;
  justify-content: center;
  align-items: center;
  display: flex;
  align-self: ${(props: Props) => (props.fullWidth ? "stretch" : "baseline")};
  text-align: center;
  border-radius: ${rem(0.375)}px;
  opacity: ${(props: Props) => (props.disabled ? 0.3 : 1)};
`;

function Button({ children, style, type, fullWidth, ...props }: Props) {
  const white = "#ffffff";
  const black = "#000000";

  const styleTypes: { [key: string]: { [key: string]: string | number } } = {
    primary: {
      color: white,
      backgroundColor: "#0d6efd",
    },
    success: {
      color: white,
      backgroundColor: "#198754",
    },
    danger: {
      color: white,
      backgroundColor: "#dc3545",
    },
    warning: {
      color: black,
      backgroundColor: "#ffc107",
    },
    transparent: {
      color: black,
      backgroundColor: "#00000000",
    },
    light: {
      color: black,
      backgroundColor: "#f8f9fa",
    },
    dark: {
      color: white,
      backgroundColor: "#212529",
    },
    info: {
      color: black,
      backgroundColor: "#0dcaf0",
    },
    ["outline-primary"]: {
      color: "#0d6efd",
      borderColor: "#0d6efd",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    ["outline-success"]: {
      color: "#198754",
      borderColor: "#198754",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    ["outline-danger"]: {
      color: "#dc3545",
      borderColor: "#dc3545",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    ["outline-warning"]: {
      color: "#ffc107",
      borderColor: "#ffc107",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    ["outline-light"]: {
      color: "#f8f9fa",
      borderColor: "#f8f9fa",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    ["outline-dark"]: {
      color: "#212529",
      borderColor: "#212529",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    ["outline-info"]: {
      color: "#0dcaf0",
      borderColor: "#0dcaf0",
      backgroundColor: "transparent",
      borderWidth: 1,
    },
  };

  return (
    <Pressable {...props}>
      <Container
        fullWidth={fullWidth}
        disabled={props.disabled}
        style={[styleTypes[type || "primary"], style]}
      >
        {children}
      </Container>
    </Pressable>
  );
}

export default Button;
