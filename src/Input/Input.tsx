import React, { ForwardedRef, forwardRef } from "react";
import TextInput from "./TextInput";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import DateInput from "./DateInput";
import SearchInput from "./SearchInput";
import Switch from "./Switch";
import SelectInput from "./SelectInput";
import NumberInput from "./NumberInput";
import TextAreaInput from "./TextAreaInput";

interface Props {
  type?:
    | "text"
    | "radio"
    | "checkbox"
    | "date"
    | "search"
    | "switch"
    | "select"
    | "number"
    | "textarea";
  children?: React.ReactNode;
  [key: string]: any;
}

const inputComponents: { [key: string]: any } = {
  radio: Radio,
  checkbox: Checkbox,
  date: DateInput,
  search: SearchInput,
  switch: Switch,
  select: SelectInput,
  number: NumberInput,
  textarea: TextAreaInput,
};

function Input(
  { type = "text", children, ...props }: Props,
  ref: ForwardedRef<any>
) {
  const Component = inputComponents[type] || TextInput;
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
}

export default forwardRef(Input);
