import React, { ForwardedRef, forwardRef } from "react";
import TextInput from "./TextInput";

interface Props {
  children?: React.ReactNode;
  onChange?: (text: string) => void;
  onChangeText?: (text: string) => void;
  [key: string]: any;
}

function NumberInput(
  { children, onChangeText, onChange, ...props }: Props,
  ref: ForwardedRef<any>
) {
  return (
    <TextInput
      ref={ref}
      {...props}
      onChangeText={(input: string) => {
        const numericInput = input.replace(/[^0-9]/g, "");
        onChangeText && onChangeText(numericInput);
        onChange && onChange(numericInput);
      }}
    >
      {children}
    </TextInput>
  );
}

export default forwardRef(NumberInput);
