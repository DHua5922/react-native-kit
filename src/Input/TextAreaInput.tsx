import React, { ForwardedRef, forwardRef } from "react";
import TextInput from "./TextInput";

interface Props {
  children?: React.ReactNode;
  onChange?: (text: string) => void;
  onChangeText?: (text: string) => void;
  [key: string]: any;
}

function TextAreaInput(
  { children, onChange, onChangeText, ...props }: Props,
  ref: ForwardedRef<any>
) {
  return (
    <TextInput
      ref={ref}
      {...props}
      onChangeText={(text: string) => {
        onChangeText && onChangeText(text);
        onChange && onChange(text);
      }}
      multiline
    >
      {children}
    </TextInput>
  );
}

export default forwardRef(TextAreaInput);
