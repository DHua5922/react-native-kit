import FormContext from "./FormContext";
import React from "react";

interface Props {
  onSubmit?: () => void;
  children?: React.ReactNode;
}

function Form({ onSubmit, children }: Props) {
  return (
    <FormContext.Provider value={onSubmit || (() => {})}>
      {children}
    </FormContext.Provider>
  );
}

export default Form;
