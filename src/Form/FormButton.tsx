import React, { useContext } from "react";
import FormContext from "./FormContext";
import Button from "../Button";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

function FormButton({ children, ...props }: Props) {
  const onSubmit = useContext(FormContext);
  return (
    <Button onPress={onSubmit} {...props}>
      {children}
    </Button>
  );
}

export default FormButton;
