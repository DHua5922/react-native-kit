import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { TextInput as RnTextInput } from "react-native";
import styled from "styled-components/native";
import Row from "../Row";
import { callHandler } from "../internal/callbacks";

interface Props {
  leftChildren?: React.ReactNode;
  children?: React.ReactNode;
  rightChildren?: React.ReactNode;
  style?: object | any[];
  onFocus?: (evt: any) => void;
  onBlur?: (evt: any) => void;
  onChange?: (text: string) => void;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
  containerProps?: object;
  focused?: boolean;
  [key: string]: any;
}

interface ContainerParentProps {
  focused: boolean;
  disabled: boolean;
}

const ContainerParent = styled(Row)<ContainerParentProps>`
  border-width: ${(props: { focused: boolean }) => (props.focused ? 2 : 1)}px;
  border-color: #${(props: { focused: boolean }) => (props.focused ? "0d6efd" : "dee2e6")};
  border-radius: 5px;
  align-items: center;
  opacity: ${(props: ContainerParentProps) => (props.disabled ? 0.3 : 1)};
  flex-wrap: nowrap;
`;
const ContainerInput = styled(RnTextInput)`
  padding: 8px;
  height: 100%;
  width: 100%;
`;
const Container = Object.assign(ContainerParent, { Input: ContainerInput });

function TextInput(
  {
    leftChildren,
    children,
    rightChildren,
    onFocus,
    onBlur,
    onChange,
    onChangeText,
    disabled = false,
    containerProps,
    focused = false,
    ...props
  }: Props,
  ref: ForwardedRef<any>
) {
  const [isFocused, setIsFocused] = useState(focused);

  useEffect(() => {
    focused && ref && "current" in ref && ref.current.focus();
  }, [focused, ref]);

  return (
    <Container focused={isFocused} disabled={disabled} {...containerProps}>
      {leftChildren}
      {children || (
        <Container.Input
          ref={ref}
          placeholderTextColor="#959595"
          {...props}
          onFocus={(evt: any) => {
            if (!disabled) {
              callHandler(onFocus, evt);
              setIsFocused(true);
            }
          }}
          onBlur={(evt: any) => {
            if (!disabled) {
              callHandler(onBlur, evt);
              setIsFocused(false);
            }
          }}
          onChangeText={(text: string) => {
            if (!disabled) {
              callHandler(onChange, text);
              callHandler(onChangeText, text);
            }
          }}
        />
      )}
      {rightChildren}
    </Container>
  );
}

export default forwardRef(TextInput);
