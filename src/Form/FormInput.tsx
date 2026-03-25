import React, { useContext } from "react";
import Input from "../Input";
import FormContext from "./FormContext";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

function FormInput({ children, ...props }: Props) {
  const onSubmit = useContext(FormContext);
  return (
    <Input onSubmitEditing={onSubmit} {...props}>
      {children}
    </Input>
  );
}

export default FormInput;
